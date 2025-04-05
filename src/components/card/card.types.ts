import { StaticImageData } from "next/image";

export type CardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  link: string
};
