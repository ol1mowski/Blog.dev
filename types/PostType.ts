import { type StaticImageData } from "next/image";

export type PostCardType = {
  id?: number;
  title: string;
  description: string;
  postImage: StaticImageData;
  authorImage: StaticImageData;
  author: string;
  date: string;
};
