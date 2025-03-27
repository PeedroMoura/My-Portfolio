import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type ThemedImageProps = {
  src: ImageProps["src"]
  className?: ImageProps["className"]
}

type LightDarkProps = {
  light: ThemedImageProps
  dark: ThemedImageProps
}

type PropsWithThemedImage<T = {}> = T & (LightDarkProps | ThemedImageProps)
type Props = PropsWithThemedImage<Omit<ImageProps, "priority" | "loading">>

const ThemeImage = ({ className, alt, ...rest }: Props) => {
  const dual = 'dark' in rest;
  const lightSrc = dual ? rest.light.src : rest.src;
  const lightClassName = dual ? rest.light.className : (rest as ImageProps).className;

  return (
    <>
      {lightSrc && (
        <Image
          {...rest}
          src={lightSrc}
          alt={alt}
          className={cn({ "dark:hidden": dual }, className, lightClassName)}
        />
      )}
      {dual && (
        <Image
          {...rest}
          src={rest.dark.src}
          alt={alt}
          className={cn("hidden dark:block", className, rest.dark.className)}
        />
      )}
    </>
  );
};
ThemeImage.displayName = "ThemeImage";
export { ThemeImage, type ThemedImageProps, type PropsWithThemedImage };
