import { LinkData } from "@/types";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok, FaYoutube } from "react-icons/fa6";

export const socialMediaLinks: Readonly<LinkData[]> = [
  { title: "Instagram", href: "https://www.instagram.com/MetaRidesInc", icon: InstagramLogoIcon },
  { title: "X", href: "https://x.com/MetaRidesInc", icon: BsTwitterX },
  { title: "TikTok", href: "https://www.tiktok.com/@metarides", icon: FaTiktok },
  { title: "LinkedIn", href: "https://www.linkedin.com/company/metarides/", icon: LinkedInLogoIcon },
  { title: "YouTube", href: "https://www.youtube.com/@metarides", icon: FaYoutube },
  { title: "GitHub", href: "https://github.com/metarides", icon: GitHubLogoIcon },
] as const;

export const divisionsLinks: Readonly<LinkData[]> = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn about Metarides and our partners",
    bgClassName: "vehicle-bg"
  },
  {
    title: "MetaRides Racing",
    href: "/racing",
    description: "A thrilling multiplayer racing game where vehicles are digital assets!",
  },
  {
    title: "Press Releases",
    href: "/press",
    description: "Get involved and read about MetaRides in the news!",
  },
  {
    title: "Merchandise",
    href: "https://metarides.printify.me",
    description: "Check out our branded swag!",
  }
] as const;

export const nftsLinks: Readonly<LinkData[]> = [
  {
    title: "Supercars",
    href: "/mint",
    description: "Our MetaRides X Unstoppable Domains supercars are minting now!",
    bgClassName: "team-bg"
  },
  {
    title: "Pit Pass Memberships",
    href: "https://opensea.io/collection/metarides-pit-pass",
    description: "VIP Pit Pass holders enjoy an awesome range of exclusive benefits!",
  },
  { title: "Garages", href: "/mint", description: "Get your personal garage for in-game display and storage!" },
  // { title: "More Coming Soon", href: "#", description: "More NFTs coming soon! Stay tuned for updates..." },
] as const;
