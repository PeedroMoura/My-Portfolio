// noinspection HtmlUnknownTarget

import MetaRidesRacingImage from "@/app/icon.png";
import { Logos } from "@/components/logos";
import { ThemeImage } from "@/components/theme-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { YouTubeVideo } from "@/components/youtube-video";
import { Scroller } from "@/components/scroller";
import { cn } from "@/lib/utils";
import { latestNews, partners } from "@/utils/data";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      {/** Hero Section */}
      <section id="hero" className="flex flex-col space-y-8 xl:space-y-20 w-full xl:max-w-7xl">
        <div className="flex flex-col xl:flex-row-reverse items-center gap-4 xl:gap-10 xl:justify-around">
          <YouTubeVideo
            videoId="4bXGyTm7pE0"
            className="border-2 h-full w-96 max-xl:h-[13.5rem] xl:w-[600px]"
            loadingImage={MetaRidesRacingImage}
            imageClassName="w-72 animate-pulse mx-auto"
          />
          <div className="flex flex-col items-center text-justify space-y-4 w-full max-w-sm">
            <Logos.metarides className="w-96" />
            <span>
              MetaRides: Redefining Tomorrow&apos;s Gaming Today
            </span>
            <span>
              Own your fleet of interoperable vehicles, ignite the thrill in our MetaRides Racing game on Steam, and
              dominate the streets within our ever-growing network of partner gaming and Metaverse worlds!
            </span>
            <div className="flex justify-between w-full xl:max-w-96">
              <Button asChild>
                <Link href="/mint">Mint Your Supercars</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/** Supercars Section */}
      <section
        id="supercars"
        className="flex flex-col xl:flex-row gap-16 items-center justify-around w-full xl:max-w-7xl"
      >
        <div className="w-[375px]">
          <Carousel>
            <CarouselContent>
              {[ 140, 631, 8, 195, 183, 422, 565, 202 ].map(id => (
                <CarouselItem key={`car-${id}`}>
                  <Image
                    src={`https://imagedelivery.net/Hf_Y27vU56DgRobDFit-HA/mrv/${id}/public`}
                    alt={`car-${id}`}
                    width={375}
                    height={375}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-sm:hidden" />
            <CarouselNext className="max-sm:hidden" />
          </Carousel>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl text-primary">Digital Supercars</h2>
          <span className="text-justify max-w-[525px]">
            Our MetaRides X Unstoppable Domains supercars are minting now. More vehicles, including our highly
            anticipated OG Collection, are coming soon! Start your MetaRides collection today and get in the game!
          </span>
          <div className="grid grid-cols-2 gap-10 text-primary">
            <ul className="list-disc">
              <li>Race Now!</li>
              <li>Only $49.99 USDC!</li>
              <li>Interoperable!</li>
            </ul>
            <ul className="list-disc">
              <li>Garages Available!</li>
              <li>Minimal Gas (Polygon)</li>
              <li>1/1 Designs!</li>
            </ul>
          </div>
          <Button asChild>
            <Link href="/mint">Mint Your Supercars</Link>
          </Button>
        </div>
      </section>
      {/** Partners Section */}
      <section className={cn("flex flex-col gap-4 w-full xl:max-w-7xl items-center text-center")}>
        <h2 className="text-4xl text-primary">Partners</h2>
        <Scroller speed="fast">
          {partners.filter(p => 'src' in p || 'dark' in p).map(({ title, link, ...rest }) => (
            <ThemeImage key={title} {...rest as any} alt={title} className={cn("h-20 w-fit z-0 rounded-xl", (rest as ImageProps).className)} />
          ))}
        </Scroller>
      </section>
      {/** News Section */}
      <section id="news" className="flex flex-col gap-4 w-full xl:max-w-7xl">
        <h2 className="text-3xl text-primary text-center">Latest News</h2>
        <div className="flex gap-4 flex-wrap justify-around w-full">
          {latestNews.map(news => (
            <Card key={news.title} className="w-[350px]">
              <div className={cn("w-[350px] h-[350px] rounded-t-xl overflow-hidden", news.imageBgClass)}>
                <Image
                  className={cn(
                    "object-center",
                    news.imageByWidth ? "object-contain w-full h-full" : "object-cover h-full",
                    news.imageClassName,
                  )}
                  src={news.image}
                  alt="img"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-primary">{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify text-xs">
                  {news.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/** Vision Section */}
      <section id="vision" className="flex flex-col gap-4 w-full xl:max-w-7xl">
        <h2 className="text-3xl text-primary text-center">Our Vision</h2>
        <div className="flex gap-4 flex-wrap justify-around">
          <Card className="w-[350px] border-0">
            <CardHeader>
              <CardTitle className="text-primary">Brand Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs">
                We are working with brands big and small to help them create and release Metaverse ready digital
                vehicles
                and environments! Our very first partnership project is with Unstoppable Domains!
              </p>
            </CardContent>
          </Card>
          <Card className="w-[350px] border-0">
            <CardHeader>
              <CardTitle className="text-primary">MetaRides Collects & Charity Wallets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs">
                Our &quot;MetaRides Collects&quot; Wallet buys NFTs from other Web3 Projects. We also allocate funds to
                our charity wallet which supports Domestic Violence & Youth Suicide Prevention.
              </p>
            </CardContent>
          </Card>
          <Card className="w-[350px] border-0">
            <CardHeader>
              <CardTitle className="text-primary">MetaRides Racing Game on Steam</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs">
                Our racing game Stage 1 MVP is live on Steam! Stage 2 is in production which will allow us to release
                multi-player, matchmaking, race nights, the ability to race your own vehicles, and so much more!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Page;
