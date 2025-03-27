import "@/styles/globals.css";
import Logo from "@/app/icon.png";
import { BackToTopButton } from "@/components/back-to-top-button";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStaticStyle,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AppDescription, AppName, BaseURL } from "@/config/constants";
import { steamLink } from "@/lib/constants";
import { divisionsLinks, nftsLinks, socialMediaLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { calcHrefPrefetch, calcHrefTarget } from "@/utils/strings";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

// noinspection JSUnusedGlobalSymbols
export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
  themeColor: "#bbff00",
  colorScheme: "dark",
};

export const metadata = {
  metadataBase: new URL("/mint", BaseURL),
  title: {
    default: AppName,
    template: `%s | ${AppName}`,
  },
  description: AppDescription,
  generator: "Next.js",
  applicationName: "MetaRide",
  keywords: [ "Gaming", "Crypto", "Racing", "Polygon" ],
  authors: [
    { name: "Nicholas St. Germain", url: "https://cajun.pro" },
    { name: "Dragoslav Pavlovic", url: "https://valsogard.com" },
  ],
  creator: "Nicholas St. Germain",
  publisher: "Vercel",
  category: "gaming",
  twitter: {
    card: "summary",
    title: AppName,
    description: AppDescription,
    siteId: "1553623296192778240",
    creator: "@DirtyCajunRice",
    creatorId: "434881606",
    images: [ "https://metarides.io/logo.png" ],
  },
  openGraph: {
    title: AppName,
    description: AppDescription,
    url: BaseURL,
    siteName: AppName,
    images: [
      { url: "https://metarides.io/logo.png" },
    ],
    locale: "en_US",
    type: "website",
  },
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col h-[100svh] w-full max-w-screen font-orbitron">
        <ThemeProvider>
          <nav className="absolute z-50 flex w-screen h-16 bg-background border-b-primary border-b-2 items-center px-5 py-4 justify-between">
            <Link href="/">
              <Image src={Logo} alt="logo" className="h-9 w-9" />
            </Link>
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden min-[431px]:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href={steamLink} legacyBehavior passHref prefetch={false}>
                    <NavigationMenuLink target="_blank" className={navigationMenuTriggerStaticStyle}>
                      Play Now!
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {[
                  { title: "NFTs", links: nftsLinks },
                  { title: "Divisions", links: divisionsLinks },
                ].map(({ title, links }) => (
                  <NavigationMenuItem key={title}>
                    <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <Link href={links[0].href} legacyBehavior passHref>
                            <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative">
                              <div className={links[0].bgClassName}></div>
                              <Image src={Logo} alt="logo" className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                {links[0].title}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {links[0].description}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        {links.slice(1).map((props) => (
                          <li key={props.title}>
                            <Link
                              legacyBehavior
                              href={props.href}
                              prefetch={calcHrefPrefetch(props.href)}
                              passHref
                            >
                              <NavigationMenuLink
                                target={calcHrefTarget(props.href)}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                  "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground z-[201]",
                                  { "pointer-events-none": props.href.toString() === "#" },
                                )}
                              >
                                <div className="text-sm font-medium leading-none">{props.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {props.description}
                                </p>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex space-x-2">
              <ThemeToggleButton />
              {/* Side Navigation */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="px-2 min-[431px]:hidden" variant="ghost">
                    <HamburgerMenuIcon className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="h-full">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href="/">
                        <Image src={Logo} alt="logo" className="h-12 w-12 mx-auto" />
                      </Link>
                    </SheetTitle>
                    <SheetDescription className="text-left font-semibold text-white pt-4 h-full">
                      <ScrollArea className="w-full h-[calc(100dvh-96px-48px-24px)] pb-1">
                        <ul className="space-y-4 pb-3">
                          {[
                            { title: "NFTs", links: nftsLinks.slice(0, -1) },
                            { title: "Divisions", links: divisionsLinks },
                            { title: "Social", links: socialMediaLinks },
                          ].map(({ title, links }) => (
                            <li key={title} className="space-y-4">
                              <div>
                                <h4 className="font-bold text-primary text-xl border-b border-b-primary">{title}</h4>
                              </div>
                              <ul className="flex flex-col gap-2 text-lg">
                                {links.map(({ icon: Icon, href, ...props }) => (
                                  <li key={props.title}>
                                    <SheetTrigger asChild>
                                      <Link
                                        href={href}
                                        title={props.title}
                                        prefetch={calcHrefPrefetch(href)}
                                        target={calcHrefTarget(href)}
                                        className="flex items-center gap-2 text-foreground"
                                      >
                                        {Icon && <Icon className="w-5 text-primary" />}
                                        {props.title}
                                      </Link>
                                    </SheetTrigger>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                      <Image src={Logo} alt="logo" className="h-12 w-12 mx-auto" />
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
          <div id="scroll-container" className="flex flex-col flex-grow mt-16 overflow-y-scroll scroll-smooth">
            <div id="scroll-observer" />
            <div className="flex flex-col flex-grow px-6 lg:px-20 py-4 lg:py-16">
              {children}
              <BackToTopButton />
            </div>
            {/* Footer */}
            <footer className="flex flex-col lg:flex-row w-full border-t-primary/20 border-t-2 items-center justify-between px-5 py-3 gap-4">
              <div className="flex space-x-2">
                {socialMediaLinks.map(({ title, icon: Icon, href }) => (
                  <Link key={title} href={href} prefetch={false} target="_blank" referrerPolicy="no-referrer">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </Link>
                ))}
              </div>
              <div className="flex space-x-2">
                <Input placeholder="Email" className="w-48" />
                <Button>Subscribe</Button>
              </div>
              <span className="text-xs text-muted-foreground">
                © {new Date().getUTCFullYear()} MetaRides, Inc. All Rights Reserved.
              </span>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
