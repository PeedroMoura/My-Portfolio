import { InstagramLogoIcon } from "@radix-ui/react-icons";
import type { IconType as ReactIconsIconType } from "react-icons";

export interface MintOption {
  title: string;
  description: string;
  price: bigint;
  thumbnail: string;
  contract: `0x${string}`;
  collectionId: number;
}

export interface CollectionData {
  name: string;
  thumbnail: string;
  cover: string;
  description: string;
  mintDescription: string;
  options: MintOption[];
  enabled?: boolean;

}

export type RadixIcon = typeof InstagramLogoIcon;
export type IconType = RadixIcon | ReactIconsIconType;

export type LinkData = {
  title: string
  href: string
  icon?: IconType
  description?: string
  bgClassName?: string
};

export type NextContext<TParams = Record<string, string>> = {
  params: TParams;
}
