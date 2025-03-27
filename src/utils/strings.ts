import type { UrlObject } from "url";

type Href = string | UrlObject | undefined;

export const calcHrefTarget = (href: Href = undefined) =>
  href && (
    typeof href === "string" ? href : href.toString()
  ).startsWith("http") ? "_blank" : "";

export const calcHrefPrefetch = (href: Href = undefined) => calcHrefTarget(href) !== "_blank";
