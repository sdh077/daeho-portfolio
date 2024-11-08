"use client";

import { Photo } from "@/interface/photo";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ImageCard = ({ data }: { data: Photo }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="w-full group/card h-fit" >
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card w-full aspect-square rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between",
          " bg-cover bg-center",
          `bg-cover`,
          `before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0  hover:after:opacity-50",
          // "transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${data.src})`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 group-hover/card:bg-black/30 group-hover/card:scale-[101%] opacity-60"></div>
        <div className="relative text content hover:bg-black/20 w-full h-full p-2 flex flex-col justify-between">
          <div>
            <div className="font-normal text-base relative z-10 text-gray-200">
              {data.title}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-md md:text-xl text-right relative z-10">
          {data.title}
        </h1>

        <div className="absolute w-full bottom-0 hidden group-hover/card:flex flex-wrap font-normal text-sm text-gray-50 z-10 my-4">
          Lorem ipsum dolor sit amet.
        </div>    </div>
    </div>
  );
};
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default ImageCard