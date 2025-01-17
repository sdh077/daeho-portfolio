"use client";
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/effect-ui/tracing-beam";
import Link from "next/link";

const calsans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2"
});

export default function Project() {
  return (
    <div className="container overflow-hidden">
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">

              <div className="flex justify-between">
                <p className={twMerge(calsans.className, "text-xl mb-4")}>
                  {item.title}
                </p>
                <Link href={item.badge} className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  사이트 이동
                </Link>
              </div>
              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "그 사랑교회 홈페이지",
    description: (
      <>
        <p>
          현재 출석중인 그 사랑교회의 홈페이지를 제작
        </p>
      </>
    ),
    badge: "https://hisgreatlovechurch.com/",
    image:
      '/preview/church.png',
  },
  {
    title: "The place",
    description: (
      <>
        <p>
          서울 맛집 소개
        </p>
      </>
    ),
    badge: "https://www.dayerd.com/",
    image:
      '/preview/theplace.png',
  },
  {
    title: "reonai",
    description: (
      <>
        <p>
          로스팅 스타트업 사이트 제작
        </p>
      </>
    ),
    badge: "https://reonai.vercel.app/",
    image:
      '/preview/reonai.png',
  },
];
