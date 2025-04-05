"use client";

import Image from "next/image";
import { DetailServicesProps } from "./detailServices.types";
import Link from "next/link";
import { Button } from "@/components";

export const DetailServices = ({
  title,
  description,
  image,
}: DetailServicesProps) => {
  return (
    <section className="flex flex-col md:flex-row bg-gray-100 gap-10 py-22 px-6 md:px-12 items-center justify-around min-h-screen">
      {/* Imagen */}
      <div className="w-full md:w-1/2">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="shadow-md w-full object-cover"
        />
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-sm text-blue-700 font-bold uppercase">{title}</h2>
        <p className="text-base md:text-lg font-medium text-black py-2 md:py-4">
          {description}
        </p>
        <Link href="/#Contact">
          <Button
            title="Contáctanos"
            onClick={() => {
              const section = document.querySelector("#Contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </Link>
      </div>
    </section>
  );
};
