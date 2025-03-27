import { z } from "zod";

export const contextSchema = (maxTokenId: bigint = 1_000_000n) => z.object({
  params: z.object({
    symbol: z.string().toLowerCase().regex(/mr[vg]/),
    tokenId: z.number({ coerce: true }).int().gte(1, "Invalid TokenID Number").lte(Number(maxTokenId), "TokenID Not Minted Yet")
  })
})

export type Context = z.infer<ReturnType<typeof contextSchema>>;

export const searchParamsSchema = z.object({
  format: z.enum(["name", "hex"]).catch("name"),
})
