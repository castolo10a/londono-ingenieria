import { motion } from "framer-motion";
import { CardProps } from "./card.types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Card: FC<CardProps> = ({ image, title, description, link }) => {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="group max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform"
      >
        <div className="w-full">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-50 md:h-60 object-cover"
          />
        </div>

        <div className="p-4">
          <div className="flex gap-4 items-center">
            <h3
              title={title}
              className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-500 truncate  w-full"
            >
              {title}
            </h3>
            <span className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-500 group-hover:translate-x-2 transition-transform transition-colors">
              &gt;
            </span>
          </div>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};
