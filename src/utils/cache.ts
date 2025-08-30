import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const redis = new Redis(process.env.REDIS_URL as string);

export const getCache = async (key: string) => {
  try {
    return await redis.get(key);
  } catch (e: any) {
    console.warn("Redis error", e.message);
    return null;
  }
};

export const setCache = async (key: string, value: string, ttlSec?: number) => {
  try {
    if (ttlSec) await redis.set(key, value, "EX", ttlSec);
    else await redis.set(key, value);
  } catch (e: any) {
    console.warn("Redis error", e.message);
  }
};

export default redis;
