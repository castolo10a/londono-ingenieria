"use client";

import { FC } from "react";
import { Button } from "@/components";

export const Home: FC = () => {
  return (
    <section
      id="Home"
      className="relative bg-cover bg-center bg-fixed h-160 bg-[url('/assets/home-nigth.webp')] flex items-center"
    >
      <div className="relative z-10 px-6 md:px-16 max-w-2xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">
          Londoño Ingeniería
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Construyendo futuro con calidad y compromiso.
        </p>

        <Button
          title="Ver servicios"
          onClick={() => {
            const section = document.querySelector("#Services");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 hover:border-blue-800"
        />
      </div>
    </section>
  );
};
