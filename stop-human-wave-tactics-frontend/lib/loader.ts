"use client";
import path from "path";
import type { ImageLoaderProps } from 'next/image';

export const imageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps): string => {
  const url = path.join("", src);
  return url;
};
