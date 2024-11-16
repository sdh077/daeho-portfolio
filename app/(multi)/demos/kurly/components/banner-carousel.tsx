'use client'
import React, { useState } from 'react'
import { Banner } from '../interface';
import Image from 'next/image';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default ({ banners }: { banners: Banner[] }) => {
  const [hover, setHover] = useState(false)
  return (
    <section className='relative'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Swiper
        modules={[]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {banners.map(banner =>
          <SwiperSlide key={banner.id}>
            <div className='relative w-full h-[370px]'>
              <Image src={banner.image_url} fill className='object-cover' alt='banner' />
            </div>
          </SwiperSlide>
        )}
        <SlideNextButton view={hover} />
      </Swiper>
    </section>
  );
};
function SlideNextButton({ view }: { view: boolean }) {
  const swiper = useSwiper()

  return (
    <>
      <button className={cn(view ? 'block' : 'hidden', 'p-2 bg-gray-500/70 text-white rounded-full transition ease-in duration-300 absolute top-[50%] left-16 z-10')} onClick={() => swiper.slidePrev()}><ChevronLeft /></button>
      <button className={cn(view ? 'block' : 'hidden', 'p-2 bg-gray-500/70 text-white rounded-full transition ease-in duration-300 absolute top-[50%] right-16 z-10')} onClick={() => swiper.slideNext()}><ChevronRight /></button>
    </>
  );
}