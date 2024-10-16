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
    title: "스타 맛집",
    description: (
      <>
        <p>
          인기 유투버 또는 예능에서 나온 음식점 정보를 보여주는 사이트
        </p>
      </>
    ),
    badge: "https://culinarywar.vercel.app/",
    image:
      '/preview/culinary.png',
  },
  {
    title: "로또 명당",
    description: (
      <>
        <p>
          전체 로또 1등 통계 정보 사이트
        </p>
      </>
    ),
    badge: "https://lotto-famous.vercel.app/",
    image:
      '/preview/lotto.png',
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
