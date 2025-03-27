import HIPEDFoundationLogo from "@/assets/logos/hiped-foundation.png";
import { ThemeImage } from "@/components/theme-image";
import { Button } from "@/components/ui/button";
import { AppName, BaseURL } from "@/config/constants";
import { cn } from "@/lib/utils";
import { partners } from "@/utils/data";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Learn about MetaRides & our partners",
  twitter: {
    card: "summary",
    title: `About`,
    description: "Learn about MetaRides & our partners",
    images: [ "https://metarides.io/logo.png" ],
  },
  openGraph: {
    title: `About`,
    description: "Learn about MetaRides & our partners",
    url: BaseURL + "/about",
    siteName: AppName,
    images: [
      { url: "https://metarides.io/logo.png" },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Page = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <section className={cn("flex flex-col gap-4 w-full xl:max-w-7xl items-center text-center")}>
        <h2 className="text-5xl text-primary">About Us</h2>
        <span className="max-xl:max-w-[525px] max-w-[1050px]">
          Born on the blockchain in 2022, MetaRides, Inc. is at the forefront of innovation, creating Metaverse-ready
          vehicles, assets, and garage environments.
          The company also hosts MetaRides Radio, playing Web3 music in every car and garage, and has a beta version of
          our MetaRides Racing game on Steam.
          Additionally, MetaRides offers virtual marketing and branding opportunities to companies of all sizes.
          Through digital asset ownership, MetaRides empowers its collectors to preserve and transport their digital
          identities to multiple virtual platforms.
        </span>
        <div
          className={cn(
            "flex flex-col xl:flex-row max-sm:gap-4 gap-16 max-xl:items-center justify-around w-full xl:max-w-7xl")}
        >
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-2xl text-primary">Vision</h2>
            <span className="max-w-[525px]">
              To create first-to-market digital asset brand that uncovers the endless possibilities of the rapidly
              growing
              Gaming & Metaverse landscapes.
            </span>
          </div>
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-2xl text-primary">Mission</h2>
            <span className="max-w-[525px]">
              To establish MetaRides as the leading & unparalleled source for Web3 Metaverse & gaming assets.
            </span>
          </div>
        </div>
      </section>
      <section className={cn("flex flex-col gap-4 w-full xl:max-w-7xl items-center text-center")}>
        <h2 className="text-4xl text-primary">Partners</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {partners.filter(p => 'src' in p || 'light' in p).map(({ title, link: { url, text }, ...rest }) => (
            <div key={title} className="flex flex-col items-center gap-4">
              <ThemeImage {...rest as any} alt={title} className={cn("h-32 w-fit rounded-xl", (rest as ImageProps).className)} />
              <Link
                href={url}
                prefetch={false}
                target="_blank"
                className="flex font-semibold underline items-center relative"
              >
                {text}
                <ExternalLinkIcon className="absolute right-0 translate-x-5 top-1/2 -translate-y-1/2" />
              </Link>
            </div>

          ))}
        </div>
        <span className="max-xl:max-w-[525px] max-w-[1050px] pt-4">
          MetaRides, Inc. works closely with Web2 and Web3 brands to establish mutually beneficial partnerships. At
          MetaRides, we pride ourselves on our ability to build quality, mutually beneficial relationships with
          companies big and small.
        </span>
        <span className="max-xl:max-w-[525px] max-w-[1050px]">
          If you would like to discuss partnership opportunities with our team, please contact either:
        </span>
        <div
          className={cn(
            "flex max-[431px]:flex-col flex-row max-sm:gap-4 gap-16 max-sm:items-center justify-around w-full sm:max-w-[525px]")}
        >
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-2xl text-primary">Mike Hurm (CEO)</h2>
            <Link className="max-w-[525px] font-bold underline" href="mailto:hurmie@metarides.io" prefetch={false}>
              hurmie@metarides.io
            </Link>
          </div>
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-2xl text-primary">Craig Hamer (COO)</h2>
            <Link className="max-w-[525px] font-bold underline" href="mailto:craig@metarides.io" prefetch={false}>
              craig@metarides.io
            </Link>
          </div>
        </div>
      </section>
      <section className={cn("flex flex-col gap-4 w-full xl:max-w-7xl")}>
        <h2 className="text-4xl text-primary text-center">Social Responsibility</h2>
        <div
          className={cn(
            "flex flex-col xl:flex-row max-sm:gap-4 gap-16 max-xl:items-center justify-around w-full xl:max-w-7xl")}
        >
          <div className="flex flex-col text-center gap-4">
            <span className="max-w-[525px] bg-black rounded-xl">
              <Image
                src={HIPEDFoundationLogo}
                alt="hiped foundation logo"
                className="max-w-[525px] -my-40 max-sm:max-w-[350px] max-sm:-my-24"
              />
            </span>
          </div>
          <div className="flex flex-col text-center items-center gap-4">
            <span className="max-w-[525px]">
              MetaRides maintains a charity wallet to support Youth Mental Health Suicide Prevention. Our registered
              charity of choice is The HIPED Foundation!
            </span>
            <span className="max-w-[525px]">
              The HIPED Foundation is a not-for-profit organization with a core mission of supporting,
              promoting, and developing mental health awareness, education, and access for at-risk teens
              and young adults.
            </span>
            <Button asChild className="w-fit">
              <Link href="https://www.thehipedfoundation.org/" prefetch={false} target="_blank">Check them out!</Link>
            </Button>
          </div>
        </div>
        <div className={cn("flex flex-col xl:flex-row gap-16 max-xl:items-center justify-around w-full xl:max-w-7xl")}>
        </div>
      </section>
    </div>
  );
};

export default Page;
