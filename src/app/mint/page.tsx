import ComingSoon from "@/assets/images/ComingSoon.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AppName, BaseURL } from "@/config/constants";
import { cn } from "@/lib/utils";
import { collections } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mint",
  description: "Mint your supercars!",
  twitter: {
    card: "summary",
    title: `Mint | ${AppName}`,
    description: "Mint your supercars!",
    images: [ "https://metarides.io/logo.png" ],
  },
  openGraph: {
    title: `Mint`,
    description: "Mint your supercars!",
    url: BaseURL + "/mint",
    siteName: AppName,
    images: [
      { url: "https://metarides.io/logo.png" },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Page = () => {
  const collection = collections[0];
  return (
    <div>
      {/* Hero section */}
      <div className="relative z-0 min-h-[500px] flex items-center justify-center">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-0">
          <Image 
            src="/logo.png" 
            alt="Logo"
            width={200}
            height={200}
            className="mb-8"
          />
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl"
          style={{ color: '#d8b45c' }}>
            Coming Soon
            <span style={{ display: 'inline-block' }}>
              <span style={{ animation: 'dot1 2s infinite' }}>.</span>
              <span style={{ animation: 'dot2 2s infinite' }}>.</span>
              <span style={{ animation: 'dot3 2s infinite' }}>.</span>
            </span>
          </h1>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes dot1 {
            0%, 100% { opacity: 0; }
            25%, 98% { opacity: 1; }
          }
          
          @keyframes dot2 {
            0%, 25% { opacity: 0; }
            50%, 98% { opacity: 1; }
          }

          @keyframes dot3 {
            0%, 50% { opacity: 0; }
            75%, 98% { opacity: 1; }
          }
        `}} />
      </div>

      <main className="pb-10">
        {/* Collection section */}
        {/* <section aria-labelledby="collections-heading" className="pt-24 sm:pt-32 max-w-6xl lg:mx-auto">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <h2 id="collections-heading" className="text-2xl font-bold tracking-tight text-white text">
              Collections
            </h2>
          </div>
          <div className="mt-4 flow-root">
            <div className="-my-2">
              <ScrollArea className="w-full whitespace-nowrap rounded-md">
                <div className="flex space-x-4 pb-4 pt-2 px-2">
                  {collections.map((col, i) => (
                    <div
                      key={i}
                      className={cn(
                        "relative flex h-80 w-56 flex-col overflow-hidden rounded-3xl p-6",
                        i === 0 ? "shadow-glow" : "",
                      )}
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <Image
                          src={col.thumbnail}
                          alt={col.name}
                          className="h-full w-full object-cover object-center"
                          width={324}
                          height={324}
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-950 opacity-90"
                      />
                      <span className="mt-auto text-center text-xl font-bold text-white whitespace-normal z-[1]">
                        {col.name}
                      </span>
                      {col.enabled ? null : (
                        <span className="relative text-center italic text-white">Coming Soon</span>
                      )}
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Page;
