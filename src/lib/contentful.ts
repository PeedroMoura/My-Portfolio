import "server-only";
import type { ContentfulArticle, ContentfulAsset, ContentfulItem, ContentfulResponse } from "@/types/contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID!
const environmentId = 'master'
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const baseURL = new URL(`https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries`)
export const getArticles = async () => {
  const url = new URL(baseURL);
  url.searchParams.set("access_token", accessToken);
  const r = await fetch(url, { cache: 'no-store' });
  if (!r.ok) {
    console.error("Error getting articles")
    return { items: [], assets: [] };
  }
  const data: ContentfulResponse<ContentfulItem<ContentfulArticle>> = await r.json();
  return { items: data.items, assets: data.includes.Asset }
}


export const getImageById = (assets: ContentfulAsset[], id: string) => {
  return assets.find(a => a.sys.id === id)?.fields
}
