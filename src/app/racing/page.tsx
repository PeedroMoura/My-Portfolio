// noinspection HtmlUnknownAnchorTarget

import SkylineBoostScreenshot from "@/assets/images/skyline/skyline-boost-screenshot.jpg";
import SkylineCustomizedCarScreenshot from "@/assets/images/skyline/skyline-customized-car-screenshot.png";
import SkylineLapScreenshot from "@/assets/images/skyline/skyline-lap-screenshot.png";
import SkylineMultiCarScreenshot from "@/assets/images/skyline/skyline-multicar-screenshot.png";
import MetaRidesRacingLogo from "@/assets/logos/metarides-racing-trimmed.png";
import { Button } from "@/components/ui/button";
import { AppName, BaseURL } from "@/config/constants";
import { steamLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { FaSteam, FaXbox } from "react-icons/fa";
import { SiEpicgames, SiPlaystation } from "react-icons/si";

export const metadata = {
  title: "Racing",
  description: "A thrilling multiplayer racing game where vehicles are digital assets!",
  twitter: {
    card: "summary",
    title: `Racing`,
    description: "A thrilling multiplayer racing game where vehicles are digital assets!",
    images: [ "https://metarides.io/logo.png" ],
  },
  openGraph: {
    title: `About`,
    description: "A thrilling multiplayer racing game where vehicles are digital assets!",
    url: BaseURL + "/racing",
    siteName: AppName,
    images: [
      { url: "https://metarides.io/logo.png" },
    ],
    locale: "en_US",
    type: "website",
  },
};

const sections: Readonly<(Record<'title' | 'description', string> & { image?: StaticImageData })[]> = [
  {
    title: "Exhilarating Multiplayer",
    description: "MetaRides Racing offers an adrenaline-fueled multiplayer racing experience, bringing the excitement of digital asset vehicles to life in the metaverse.",
    image: SkylineLapScreenshot,
  },
  {
    title: "Customizable Supercars",
    description: "Players can race on tracks featuring unique challenges and upgrade their rides using an in-game economy. With customizable options, players can create personalized supercars tailored to their preferences, ensuring a thrilling and immersive racing experience.",
    image: SkylineCustomizedCarScreenshot,
  },
  {
    title: "Team-Based Competition",
    description: "Forming teams adds a new dimension to the competition, allowing players to collaborate and strategize for epic race nights filled with intense thrills and excitement.",
    image: SkylineMultiCarScreenshot,
  },
  {
    title: "Daily Challenges",
    description: "Engage with daily challenges to test your skills and earn rewards, keeping the excitement levels high and providing continuous opportunities for progression and achievement.",
    image: SkylineBoostScreenshot,
  },
  {
    title: "Future Development",
    description: "Stage 2 is currently in production, promising exciting features such as multiplayer functionality, matchmaking, the ability to race your own vehicles, and much more. These updates will ensure an even more immersive and dynamic racing experience for players, cementing MetaRides Racing as a leading contender in the world of digital asset racing.",
  },
  {
    title: "Subscription Options",
    description: "For added engagement and exclusive benefits, MetaRides Racing offers subscription options, providing players with access to premium features and content.",
  },
] as const;

const Page = () => {
  return (
    <div className="flex flex-col gap-16 items-center pb-4">
      {/* Hero Section */}
      <section id="hero" className={cn("flex flex-col gap-4 w-full xl:max-w-7xl items-center text-center")}>
        <Image
          src={MetaRidesRacingLogo}
          alt="MetaRides Racing"
          className="object-cover w-full max-xl:max-w-[525px] max-w-7xl"
        />
        <Button size="lg" asChild>
          <a href="#join-the-race">Play Now!</a>
        </Button>
      </section>
      {/* Templated Sections */}
      {sections.filter(s => s.image !== undefined).map(({ title, description, image }) => (
        <section
          key={title}
          id={title.toLowerCase().replace(/ /, "-")}
          className="flex flex-col xl:even:flex-row xl:odd:flex-row-reverse max-sm:gap-4 gap-16 max-xl:items-center justify-around w-full xl:max-w-7xl"
        >
          <div className="flex flex-col text-center gap-4">
            <Image
              src={image!}
              alt={title}
              className="max-w-[525px] max-sm:max-w-[350px]"
            />
          </div>
          <div className="flex flex-col text-center justify-evenly">
            <h3 className="text-3xl font-bold text-primary">{title}</h3>
            <span className="max-w-[525px]">
              {description}
            </span>
          </div>
        </section>
      ))}
      <section className="flex flex-col xl:flex-row max-sm:gap-4 gap-16 max-xl:items-center justify-around w-full xl:max-w-7xl">
      {sections.filter(s => s.image === undefined).map(({ title, description }) => (
        <div
          key={title}
          id={title.toLowerCase().replace(/ /, "-")}
          className="flex flex-col xl:even:flex-row xl:odd:flex-row-reverse max-sm:gap-4 gap-16 max-xl:items-center justify-around w-full xl:max-w-7xl"
        >
          <div className="flex flex-col text-center justify-evenly">
            <h3 className="text-3xl font-bold text-primary">{title}</h3>
            <span className="max-w-[525px]">
              {description}
            </span>
          </div>
        </div>
      ))}
      </section>
      {/* Download Section */}
      <section
        id="join-the-race"
        className="flex flex-col text-center max-sm:gap-4 gap-8 items-center justify-around w-full xl:max-w-7xl"
      >
        <h3 className="text-3xl font-bold text-primary">Join the Race</h3>
        <span className="max-xl:max-w-[525px] xl:max-w-[800px]">
          Choose your supercar, hit the tracks, and immerse yourself in the adrenaline-pumping action of MetaRides
          Racing. Get ready to experience the future of multiplayer racing like never before! The Stage 1 MVP is now
          available on Steam, offering players an early taste of the action and paving the way for future updates and
          enhancements.
        </span>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-4">
            <FaSteam className="h-10 w-10" />
            <Button asChild>
              <Link href={steamLink} target="_blank" prefetch={false}>Download on Steam</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <SiEpicgames className="h-10 w-10" />
            <Button disabled>
              <Link href="#" target="_blank" prefetch={false}>Coming Soon</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <FaXbox className="h-10 w-10" />
            <Button disabled>
              <Link href="#" target="_blank" prefetch={false}>Coming Soon</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <SiPlaystation className="h-10 w-10" />
            <Button disabled>
              <Link href="#" target="_blank" prefetch={false}>Coming Soon</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
