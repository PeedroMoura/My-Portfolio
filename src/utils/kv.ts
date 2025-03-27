import "server-only";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export const getNFTCount = async (symbol: string) => {
  return await redis.get<number>(`nft-count-${symbol}`);
};

export const setNFTCount = async (symbol: string, count: number) => {
  await redis.set<number>(`nft-count-${symbol}`, count);
};
