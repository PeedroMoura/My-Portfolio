import { type Context, contextSchema, searchParamsSchema } from "@/app/api/metadata/[symbol]/[tokenId]/schema";
import vehicleABI from "@/assets/abis/Vehicle";
import { nftDataMap, type TokenSymbol, UDColorMap } from "@/assets/data/nfts";
import { OpenSeaMetadata } from "@/types/nft";
import { getS3File } from "@/utils/s3";
import { NextRequest, NextResponse } from "next/server";
import { createPublicClient, http } from "viem";
import { polygon } from "viem/chains";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async (request: NextRequest, context: Context) => {

  // Parse Search Params
  const { searchParams } = request.nextUrl;
  const parsedSearchParams = searchParamsSchema.safeParse({
    format: searchParams.get("format"),
  });

  if (!parsedSearchParams.success) {
    return NextResponse.json({ error: parsedSearchParams.error.format() }, { status: 400 });
  }
  const { format } = parsedSearchParams.data;

  // Parse Context
  let parsedContext = contextSchema().safeParse(context);
  if (!parsedContext.success) {
    return NextResponse.json({ error: parsedContext.error.format() }, { status: 400 });
  }


  // Get Total Supply
  const data = nftDataMap[parsedContext.data.params.symbol.toUpperCase() as TokenSymbol];
  const client = createPublicClient({ chain: polygon, transport: http(undefined, { fetchOptions: { cache: 'no-store' }}) });
  const totalSupply = await client.readContract({
    address: data.address,
    abi: vehicleABI,
    functionName: "totalSupply",
  });
  // noinspection ReuseOfLocalVariableJS
  parsedContext = contextSchema(totalSupply).safeParse(context);
  if (!parsedContext.success) {
    return NextResponse.json({ error: parsedContext.error.flatten().fieldErrors.params?.[0] }, { status: 500 });
  }
  const { params: { tokenId, symbol } } = parsedContext.data;

  let partial: any = {};
  if (data.s3) {
    const json = await getS3File(`metadata/${symbol}/${tokenId}.json`);
    if (!json) {
      return NextResponse.json({ error: "Metadata does not exist" }, { status: 400 });
    }
    partial = JSON.parse(json);
  }

  const metadata: OpenSeaMetadata = {
    description: data.description[0],
    external_url: `https://metarides.io/nfts/${symbol}/${tokenId}`,
    name: data.namePrefix + tokenId,
    image: `https://images.metarides.io/${symbol}/${tokenId}.png`,
    ...data.staticMetadata,
    ...partial,
  };

  if (metadata.attributes && format === "name") {
    metadata.attributes = metadata.attributes.map((attribute) => {
      const a = { ...attribute };
      if (a.trait_type.toLowerCase().includes("color")) {
        if (a.value in UDColorMap) {
          a.value = UDColorMap[a.value];
        }
      }
      return a;
    });
  }
  return NextResponse.json(metadata);

};
