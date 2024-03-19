"use client";
import path from "path";

export const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}): string => {
  const url = path.join("", src);
  return url;
};
