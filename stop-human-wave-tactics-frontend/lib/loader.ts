"use client";
import path from "path";
import { getProxyURL } from "./graphqlClient";

export const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}): string => {
  const url = path.join(getProxyURL(), src);
  return url;
};
