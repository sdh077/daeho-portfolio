"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/effect-ui/3d-card";
import Link from "next/link";
import { FocusCards } from '@/components/ui/focus-card';
import { Photo } from '@/interface/photo';
import { useEffect, useState } from 'react';
import Heading from '@/components/heading';
import ImageCard from '@/components/ui/image-card';

const cards = [
  {
    id: 1234,
    title: "Forest Adventure",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1235,
    title: "Valley of life",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1236,
    title: "Sala behta hi jayega",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1237,
    title: "Camping is for pros",
    src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12348,
    title: "The road not taken",
    src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1239,
    title: "The First Rule",
    src: "https://assets.aceternity.com/the-first-rule.png",
  },
];
const CardPage = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    const getPhotos = async () =>
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(res => setPhotos(res))
    getPhotos()
  }, [])

  return (
    <div className='container flex flex-col gap-8'>
      <Heading>기본형</Heading>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-2 mx-auto md:px-8 w-full'>
        {cards?.slice(0, 6).map((data: Photo) =>
          <ImageCard key={data.id} data={data} />
        )}
      </div>
      <Heading>3D</Heading>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-2 mx-auto md:px-8 w-full'>
        {cards.slice(0, 6).map((data) =>
          <ThreeDCardDemo key={data.id} data={data} />
        )}
      </div>
      <Heading>포커스형</Heading>
      <FocusCards cards={cards} />
    </div>
  )
}

export function ThreeDCardDemo({ data }: { data: Photo }) {
  const file = cards[data.id % 6]
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-full h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {data.title.slice(0, 10)}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {file.title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 overflow-hidden h-60">
          <div className="rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out">
            <Image
              src={file.src}
              fill
              className="object-cover absolute inset-0"
              alt="thumbnail"
            />
          </div>

        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={file.src}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}


const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};



export default CardPage