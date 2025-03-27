import { Card, CardDescription, CardHeader, CardSubtitle, CardTitle } from "@/components/ui/card";
import { AppName, BaseURL } from "@/config/constants";
import { getArticles, getImageById } from "@/lib/contentful";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Press",
  description: "MetaRides in the news!",
  twitter: {
    card: "summary",
    title: `Press`,
    description: "MetaRides in the news!",
    images: [ "https://metarides.io/logo.png" ],
  },
  openGraph: {
    title: `Press`,
    description: "MetaRides in the news!",
    url: BaseURL + "/press",
    siteName: AppName,
    images: [
      { url: "https://metarides.io/logo.png" },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Page = async () => {
  const { items, assets } = await getArticles();
  console.log(items[0]);
  return (
    <div className="flex flex-col gap-16 items-center max-sm:pb-8">
      <section className={cn("flex flex-col gap-4 w-full xl:max-w-7xl items-center text-center")}>
        <h2 className="text-5xl text-primary">Press Releases</h2>
        <span className="max-xl:max-w-[525px] max-w-[1050px]">
          MetaRides in the news!
        </span>
      </section>
      <section
        className={cn("grid grid-cols-1 xl:grid-cols-2 gap-4 w-full xl:max-w-7xl content-center justify-items-center")}
      >
        {items
          .sort((a, b) => Date.parse(b.fields.articlePublishDate) - Date.parse(a.fields.articlePublishDate))
          .map(({ fields: { title, description, thumbnail, articlePublishDate, articleUrl, logo, ...props } }, i) => (
            <Link key={`press-${i}`} href={articleUrl} prefetch={false} target="_blank">
              <Card className="flex max-sm:max-w-[320px] max-sm:flex-col max-w-xl w-full dark:hover:bg-white/20 hover:bg-black/20">
                <div className="w-[320px] sm:w-40 sm:min-w-40 relative">
                  <Image
                    src={"https:" + getImageById(assets, thumbnail.sys.id)?.file.url}
                    alt="article thumbnail"
                    width={getImageById(assets, thumbnail.sys.id)?.file.details.image.width}
                    height={getImageById(assets, thumbnail.sys.id)?.file.details.image.height}
                    className={cn(
                      "sm:h-40 sm:w-40 max-sm:rounded-t-xl sm:rounded-l-xl object-cover object-center",
                      { "bg-black": props.thumbnailBackgroundColor === "Black" },
                      { "bg-slate-200": props.thumbnailBackgroundColor === "Grey" },
                      { "bg-white": props.thumbnailBackgroundColor === "White" },
                    )}
                  />
                  <Image
                    src={"https:" + getImageById(assets, logo.sys.id)?.file.url}
                    alt="article provider logo"
                    className={cn(
                      "absolute bottom-1 right-0 p-2 pl-3 h-12 w-fit bg-white rounded-l-xl",
                      { "bg-black": props.logoBackgroundColor === "Black" },
                      { "bg-slate-200": props.logoBackgroundColor === "Grey" },
                      { "bg-white": props.logoBackgroundColor === "White" },
                    )}
                    width={getImageById(assets, logo.sys.id)?.file.details.image.width}
                    height={getImageById(assets, logo.sys.id)?.file.details.image.height}
                  />
                </div>
                <CardHeader className="justify-center">
                  <CardTitle className="text-center sm:text-left truncate w-80 max-sm:w-[270px]">{title}</CardTitle>
                  <CardSubtitle>{new Date(articlePublishDate).toLocaleDateString()}</CardSubtitle>
                  <CardDescription className="text-ellipsis line-clamp-3">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
      </section>
      <section className={cn("flex flex-col gap-4 w-full xl:max-w-7xl items-center text-center")}>
        <h2 className="text-3xl text-primary">Branding</h2>
        <span className="max-xl:max-w-[525px] max-w-[1050px]">
          Looking for information on using MetaRides branding?{" "}
          <Link
            href="https://drive.google.com/file/d/1-2x0n0GvZmD_PkOzoHpkARv1IGBWg7no/view"
            className="underline font-bold"
            prefetch={false}
            target="_blank"
          >
            Branding Kit
          </Link>
        </span>
      </section>
    </div>
  );
};

export default Page;
