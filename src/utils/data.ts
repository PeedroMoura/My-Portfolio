import GamingStudioLogo from "@/assets/logos/1226-gaming-studios.png";
import BlocksterLogo from "@/assets/logos/blockster.png";
import CryptoHomiesLogo from "@/assets/logos/crypto-homies.png";
import RogueBunniesLogo from "@/assets/logos/rogue-bunnies.png";
import BNiceLogo from "@/assets/logos/bnice.png";
import Rap4Logo from "@/assets/logos/rap4.png";
import GoofTroopLogo from "@/assets/logos/goof-troop.png";
import HIPEDFoundationLOGO from "@/assets/logos/hiped-foundation.png";
import IncomeIslandLogo from "@/assets/logos/income-island.png";
import MetaRidesRacingLogo from "@/assets/logos/metarides-racing.png";
import MetaRidesRadioLogo from "@/assets/logos/metarides-radio.png";
import NFALogo from "@/assets/logos/nfa.png";
import PigeonsOfNYLogo from "@/assets/logos/pigeonsofny.png";
import ScribeLogo from "@/assets/logos/scribe.png";
import StarDawgsLogo from "@/assets/logos/stardawgs.png";
import Unchain3dLogo from "@/assets/logos/unchain3d.png";
import VitalToysLogo from "@/assets/logos/vital-toys.png";
import XpectarLogo from "@/assets/logos/xspectar.png";
import UnstoppableDomainsLightLogo from "@/assets/logos/unstoppable-domains-light.png";
import UnstoppableDomainsDarkLogo from "@/assets/logos/unstoppable-domains-dark.png";
import ForbesLogo from "@/assets/logos/forbes.png";
import NFTEveningLogo from "@/assets/logos/nft-evening.png";
import VentureBeatLogo from "@/assets/logos/venturebeat.png";
import Play2EarnLogo from "@/assets/logos/play-2-earn.png";
import BlocksterFullLogo from "@/assets/logos/blockster-full.png";
import NewsChannelNebraskaLogo from "@/assets/logos/news-channel-nebraska.png";
import type { PropsWithThemedImage, ThemedImageProps } from "@/components/theme-image";
import { CollectionData } from "@/types";
import { StaticImageData } from "next/image";

export const collections: CollectionData[] = [
  {
    name: "Unstoppable Domains",
    thumbnail: "https://imagedelivery.net/z1ETs7uqQo9seGGoKoNI8A/12629322-ef43-4e7a-8e09-c1cdc7bc5900/public",
    cover: "https://imagedelivery.net/z1ETs7uqQo9seGGoKoNI8A/5ee70e5c-e65a-42de-465a-c7dde1cd0900/public",
    description: "Mint your Unstoppable Supercars Today!",
    mintDescription: "Every UD Zara Supercar comes with a unique 20% discount code to use on your next " +
      "UnstoppableDomains.com purchase!",
    enabled: true,
    options: [
      {
        title: "UD Zara",
        description: "Unstoppable Domains Supercar",
        price: BigInt(49_990_000),
        thumbnail: "https://imagedelivery.net/z1ETs7uqQo9seGGoKoNI8A/12629322-ef43-4e7a-8e09-c1cdc7bc5900/public",
        contract: "0x89c2c2b102eabb206227be4ca3dc4df99ce2be74",
        collectionId: 0,
      },
      {
        title: "UD Garage",
        description: "Unstoppable Domains Garage",
        price: BigInt(129_990_000),
        thumbnail: "https://imagedelivery.net/z1ETs7uqQo9seGGoKoNI8A/2fb27618-ceba-44e2-c7b5-d30c88e81d00/public",
        contract: "0x4fF6055cC78372C77a9eaC3523AE327fDA7624aE",
        collectionId: 0,
      },
    ],
  },
  {
    name: "OG Collection",
    thumbnail: "https://imagedelivery.net/z1ETs7uqQo9seGGoKoNI8A/e9d2d2d1-c7f4-484f-998c-f6e79261c800/public",
    cover: "https://imagedelivery.net/z1ETs7uqQo9seGGoKoNI8A/5ee70e5c-e65a-42de-465a-c7dde1cd0900/public",
    description: "TBD",
    mintDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae justo tortor. Nam" +
      "in tempor nulla. Proin ligula massa, venenatis id",
    options: [
      {
        title: "OG Vehicle",
        description: "OG Collection Vehicle",
        price: BigInt(49_990_000),
        thumbnail: "https://imagedelivery.net/z1ETs7uqQo9seGGoKoNI8A/12629322-ef43-4e7a-8e09-c1cdc7bc5900/public",
        contract: "0x89c2c2b102eabb206227be4ca3dc4df99ce2be74",
        collectionId: 1,
      },
      {
        title: "OG Garage",
        description: "OG Garage",
        price: BigInt(129_990_000),
        thumbnail: "https://imagedelivery.net/z1ETs7uqQo9seGGoKoNI8A/2fb27618-ceba-44e2-c7b5-d30c88e81d00/public",
        contract: "0x4fF6055cC78372C77a9eaC3523AE327fDA7624aE",
        collectionId: 1,
      },
    ],
  },
];

type LinkData = {
  text: string
  url: string
}
type NewsDetails = {
  title: string
  date: string
  author: string
  description: string
  image: StaticImageData
  imageBgClass: string
  imageClassName?: string
  imageByWidth?: boolean
  link: LinkData
}

export const latestNews: Readonly<NewsDetails[]> = [
  {
    title: "MetaRides Radio",
    date: "2024.1.1",
    author: "Hermie",
    description: "Digital platform that plays Web3 music in every car and garage! ",
    image: MetaRidesRadioLogo,
    imageBgClass: "bg-white/50",
    link: {
      text: "Round 2 Application",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfMLkWDqVFNvlqwYnJlqb1x4-nDE-YO8lk8fsDNvP9uN-CUbA/viewform",
    },
  },
  {
    title: "MetaRides Racing",
    date: "2024.1.1",
    author: "Hermie",
    description: "MetaRides Racing MVP is live on Steam and accessible to holders. Mint your supercars today and get in the game!",
    image: MetaRidesRacingLogo,
    imageBgClass: "bg-black",
    imageByWidth: true,
    link: { text: "Race Now", url: "https://store.steampowered.com/app/2454150/MetaRides_Racing/" },
  },
  {
    title: "1226 Gaming Studios",
    date: "2024.1.1",
    author: "Hermie",
    description: "The MetaRides team has officially launched their brand new gaming studio! Get ready for thrilling experiences on multiple platforms!",
    image: GamingStudioLogo,
    imageClassName: "invert",
    imageBgClass: "bg-black",
    link: { text: "1226Gaming.com", url: "https://1226gaming.com/" },
  },
] as const;

type Partner = PropsWithThemedImage<{
  title: string
  link: LinkData
}>

export const partners: Readonly<Partner[]> = [
  {
    title: "Rogue Bunnies",
    src: RogueBunniesLogo,
    className: "light:invert",
    link: { text: "Rogue Bunnies", url: "https://roguebunnies.com" },
  },
  {
    title: "BNice",
    src: BNiceLogo,
    link: { text: "BNice", url: "https://bnice.io" },
  },
  {
    title: "Rap4",
    src: Rap4Logo,
    className: "light:invert",
    link: { text: "Rap4", url: "https://rap4.ai" },
  },
  {
    title: "Income Island",
    src: IncomeIslandLogo,
    link: { text: "Income Island", url: "https://www.incomeisland.org" },
  },
  { title: "StarDawgs", src: StarDawgsLogo, link: { text: "StarDawgs", url: "https://www.stardawgs.com" } },
  { title: "Scribe", src: ScribeLogo, link: { text: "Scribe", url: "https://goscribe.io" } },
  { title: "Blockster", src: BlocksterLogo, link: { text: "Blockster", url: "https://blockster.com" } },
  {
    title: "NFA",
    src: NFALogo,
    className: "dark:bg-white",
    link: { text: "NFA", url: "https://nonfungibleart.io" },
  },
  {
    title: "Crypto Homies",
    src: CryptoHomiesLogo,
    link: { text: "Crypto Homies", url: "https://cryptohomiesclub.io" },
  },
  {
    title: "Goof Troop",
    src: GoofTroopLogo,
    className: "dark:invert",
    link: { text: "Goof", url: "https://gooftroopcom.wordpress.com/" },
  },
  { title: "Vital Toys", src: VitalToysLogo, link: { text: "Vital Toys", url: "https://vitaltoys.io" } },
  {
    title: "Pigeons of New York NFT",
    src: PigeonsOfNYLogo,
    link: { text: "Pigeons of NY", url: "https://pigeonsofnewyork.io" },
  },
  {
    title: "The HIPED Foundation",
    src: HIPEDFoundationLOGO,
    className: "light:bg-black",
    link: { text: "HIPED Foundation", url: "https://www.thehipedfoundation.org" },
  },
  {
    title: "Unchain3d",
    src: Unchain3dLogo,
    link: { text: "Unchain3d", url: "https://www.unchain3d.io" },
  },
  {
    title: "xSPECTAR",
    src: XpectarLogo,
    className: "dark:bg-white",
    link: { text: "xSPECTAR", url: "https://www.xspectar.com" },
  },
  {
    title: "Unstoppable Domains",
    light: { src: UnstoppableDomainsDarkLogo },
    dark: { src: UnstoppableDomainsLightLogo },
    link: { text: "Unstoppable Domains", url: "https://unstoppabledomains.com/" },
  },
] as const;

type PressArticle = {
  title: string
  description: string
  thumbnail: string
  thumbnailClassName?: string
  url: string
  date: Date
  logo: StaticImageData
  logoClassName?: string
}

export const pressArticles: PressArticle[] = [
  {
    title: "Web3 Domains Are Poised To Become The Next Generation’s Gamer Tags",
    description: "Full digital ownership is already revolutionizing the gaming industry as we know it, not only increasing players’ agency and involvement but also offering developers new revenue opportunities that were simply untenable in the past,” explained Mike Hurm, CEO and Co-Founder of MetaRides. “Innovative features like user and creator based royalty systems can make relationships between players and game developers or content creators much more rewarding and exciting for everyone involved.",
    thumbnail: "https://imageio.forbes.com/specials-images/imageserve/65fca6ffc1d5db6c3edfce49/PC-Gamer-Weekender-web-image/960x0.jpg?format=jpg&width=1440",
    url: "https://www.forbes.com/sites/digital-assets/2024/03/21/web3-domains-are-poised-to-become-the-next-generations-gamer-tags/?ss=FDA&sh=7539b93d503d",
    date: new Date(Date.UTC(2024, 2, 21)),
    logo: ForbesLogo
  },
  {
    title: "Unstoppable Domains and MetaRides to Launch Cross-Metaverse Racing Experience",
    description: "Unstoppable Domains is thrilled to announce their partnership with MetaRides, a blockchain-based multiplayer racing project, to introduce a unique collection of playable NFT cars featuring unprecedented interoperability across multiple metaverses, allowing car enthusiasts to integrate their passion for cars into their digital identity and own custom, Unstoppable-branded NFT cars for competing in a multi-level racing game.",
    thumbnail: "https://images.prismic.io/unstoppabledomains/71ab7413-56a3-4e54-b34a-32cad86b9885_UDxMetaRides_Wednesday_Blog_Header.png?auto=compress,format",
    url: "https://unstoppabledomains.com/blog/categories/announcements/article/metarides",
    date: new Date(Date.UTC(2023, 5, 13)),
    logo: UnstoppableDomainsDarkLogo
  },
  {
    title: "Unstoppable Domains launches NFT cars with MetaRides Racing",
    description: "Unstoppable Domains, a platform for user-owned digital identity, has teamed up with MetaRides to launch a racing game with non-fungible token (NFT) cars.",
    thumbnail: "https://playtoearn.net/blog_images/unstoppable-domains-and-metarides-racing-collaborate-to-launch-nft-cars-racing-game-1000x700.png",
    url: "https://venturebeat.com/games/unstoppable-domains-launches-nft-cars-with-metarides-racing",
    date: new Date(Date.UTC(2023, 5, 14)),
    logo: VentureBeatLogo,
    logoClassName: ""
  },
  {
    title: "MetaRides: Changing the Metaverse Game with Fully Interoperable Digital Assets",
    description: "MetaRides is poised to dominate the future of gaming and advertising through its emphasis on music, interoperability, and forthcoming partnerships with renowned brands, musicians and celebrities.",
    thumbnail: "https://ik.imagekit.io/blockster/c6b7cc1c-cafb-4a44-90bd-928c63c6917b.png?tr=w-900",
    url: "https://blockster.fly.dev/metarides-changing-the-metaverse-game-with-fully-interoperable-digital-assets",
    date: new Date(Date.UTC(2023, 3, 6)),
    logo: BlocksterFullLogo,
    logoClassName: "bg-black"
  },
  {
    title: "Unstoppable Domains & MetaRides Launch Cross-Metaverse Racing Experience",
    description: "Unstoppable Domains and MetaRides are gearing up to release a collection of playable NFT cars, providing NFT holders with an avenue to express their online presence through customizable features and Web3 domain endings, fostering unparalleled interoperability.",
    thumbnail: "https://ik.imagekit.io/blockster/7d5b12fb-2464-4fa2-b108-0e89db34eef1.jpg?tr=w-900",
    url: "https://blockster.fly.dev/unstoppable-domains-metarides-launch-cross-metaverse-racing-experience",
    date: new Date(Date.UTC(2023, 5, 14)),
    logo: BlocksterFullLogo,
    logoClassName: "bg-black"
  },
  {
    title: "From Need for Speed to MetaRides Racing: EA Veterans Revolutionize the Gaming Industry",
    description: "MetaRides Racing and Unstoppable Domains have joined forces to launch a collection of interoperable digital supercars as NFTs, enabling players to customize their cars across various metaverses and platforms, ultimately bridging digital identities in a high-quality gaming experience.",
    thumbnail: "https://nftevening.com/wp-content/uploads/2023/06/MetaRides_Racing_Accelerates_Gaming_Innovation-1.jpg.webp",
    url: "https://nftevening.com/from-need-for-speed-to-metarides-racing-ea-veterans-revolutionize-the-gaming-industry/",
    date: new Date(Date.UTC(2023, 5, 15)),
    logo: NFTEveningLogo,
    logoClassName: ""
  },
  {
    title: "Unstoppable Domains and MetaRides Racing Collaborate to Launch NFT Cars Racing Game",
    description: "Unstoppable Domains, focusing on user-owned digital identities, has teamed up with MetaRides Racing, a blockchain-based multiplayer racing project, to introduce a groundbreaking NFT Cars Racing Game, aiming to unify metaverses through interoperable collector vehicles and digital showrooms.",
    thumbnail: "https://playtoearn.net/blog_images/unstoppable-domains-and-metarides-racing-collaborate-to-launch-nft-cars-racing-game-1000x700.png",
    url: "https://playtoearn.net/news/unstoppable-domains-and-metarides-racing-collaborate-to-launch-nft-cars-racing-game",
    date: new Date(Date.UTC(2023, 5, 15)),
    logo: Play2EarnLogo,
    logoClassName: "bg-black"
  },
  {
    title: "MetaRides, Inc. Announces Upcoming SAFE Round Beginning April 15, 2024",
    description: "MetaRides, Inc., a pioneering Gaming and Metaverse brand specializing in interoperable digital vehicles and environments, is thrilled to announce its upcoming SAFE (Simple Agreement for Future...",
    thumbnail: "https://ampifire.com/files/uploaded_images/f09f46ecf119e8d7c4cc387a10ff8be2.png",
    url: "https://metro.newschannelnebraska.com/story/50691896/metarides-inc-announces-upcoming-safe-round-beginning-april-15-2024",
    date: new Date(Date.UTC(2024, 3, 15)),
    logo: NewsChannelNebraskaLogo,
    thumbnailClassName: "bg-white",
    logoClassName: "bg-slate-200"
  }
]
