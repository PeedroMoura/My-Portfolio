import { OpenSeaMetadata } from "@/types/nft";
import type { Address } from "viem";

export type Color = string;
export type Name = string;

export type ColorMap = Record<Color, Name>;
export type TokenSymbol = "MRV" | "MRG";

export const BaseColorMap: ColorMap = {
  "192B55": "Deep Blue",
  "F8F6F0": "Pearl White",
  "710158": "Deep Purple",
  "000000": "Black",
  "FFFCF0": "Off White",
  "FFFFFF": "White",
  "D2042D": "Cherry Red",
  "5D4D01": "Gold",
  "989898": "Silver",
} as const;

export const UDColorMap: ColorMap = {
  ...BaseColorMap,
  "90AEF3": "Unstoppable Blue Light",
  "6385F5": "Unstoppable Blue Medium",
  "0D67FE": "Unstoppable Blue",
  "00C9FF": "Sky Blue",
  "94D3F7": "Sky Blue Light",
  "3650A1": "Sky Blue Medium",
  "21346C": "Sky Blue Dark",
  "FE6700": "Orange",
  "DB975E": "Orange Light",
  "6C3F1F": "Orange Medium",
  "432711": "Orange Dark",
  "E6FB34": "Electric Yellow",
  "00F5B4": "Electric Green",
  "9EFBD7": "Electric Green Light",
  "576F51": "Electric Green Medium",
  "2A3427": "Electric Green Dark",
  "FF80D6": "Unstoppable Pink",
  "EDACDF": "Unstoppable Pink Light",
  "5A1E52": "Unstoppable Pink Medium",
  "381139": "Unstoppable Pink Dark",
};

type NftDetails = {
  address: Address;
  s3?: boolean;
  namePrefix: string;
  staticMetadata: Partial<OpenSeaMetadata>;
  description: Record<number, string>;
}
export const nftDataMap: Readonly<Record<TokenSymbol, NftDetails>> = {
  MRV: {
    address: "0x89c2c2b102eabb206227be4ca3dc4df99ce2be74",
    s3: true,
    namePrefix: "UD Vehicle #",
    staticMetadata: {},
    description: {
      0: "This MR x UD partnership collection features 1/1 Zara Supercars, created by MetaRides and branded exclusively for Unstoppable Domains!\n\nMetaRides creates interoperable digital vehicles, environments and assets for use in its multiplayer game, MetaRides Racing, as well as in metaverse worlds and virtual experiences. Through digital asset ownership, MetaRides empowers its collectors to preserve and transport their digital identities to multiple virtual platforms.\n\nFor more information, visit MetaRides.io & UnstoppableDomains.com.",
    },
  },
  MRG: {
    address: "0x4fF6055cC78372C77a9eaC3523AE327fDA7624aE",
    namePrefix: "UD Garage #",
    staticMetadata: {
      image: "https://images.metarides.io/mrg/0.png",
      attributes: [
        {
          trait_type: "Brand",
          value: "Unstoppable Domains",
        },
      ],
    },
    description: {
      0: "MetaRides garage environments have been designed and built to the highest quality to provide you with the best user experience for the display of your MetaRides vehicle collection. In partnership with Unstoppable Domains, we are honored to bring you an exclusive MR x UD branded garage to be used in future metaverse worlds and virtual experiences. Through digital asset ownership, MetaRides empowers its collectors to preserve and transport their digital identities to multiple virtual platforms.",
    },
  },
} as const;
