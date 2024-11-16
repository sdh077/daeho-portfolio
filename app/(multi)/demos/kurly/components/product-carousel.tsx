'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Banner, CollectionProduct } from '../interface';
import Image from 'next/image';

import { Swiper, SwiperClass, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
export default ({ products }: { products: CollectionProduct[] }) => {
  const [shareSwiper, setSwiper] = useState<SwiperClass>()
  return (
    <div className='relative'
    >
      <Swiper
        modules={[]}
        spaceBetween={18}
        slidesPerView={4}
      >
        {products.map(product =>
          <SwiperSlide key={product.no}>
            <ProductCard product={product} />
          </SwiperSlide>
        )}
        <SlideAction setSw={setSwiper} />
      </Swiper>
      <SlideNextButton swiper={shareSwiper} />
    </div>
  );
};
function ProductCard({ product }: { product: CollectionProduct }) {
  const stickers = product.stickers
  const position = {
    "TOP_LEFT_TEXT": "top-1 left-1",
    "BOTTOM_CENTER_TEXT": "bottom-0 left-0 w-full text-center"
  }

  return (
    <div className='flex flex-col gap-1'>
      <div className='relative w-full' >
        <Image src={product.list_image_url} alt='상품 이미지' width={800} height={320} className='rounded-sm relative transition-all duration-300 ease-in-out hover:scale-[101%]' />
        {stickers.map(content =>
          <div key={content.content.contents[0].text}
            style={{
              backgroundColor: content.content.background_color_code,
              opacity: content.content.background_opacity
            }}
            className={cn(position[content.type], "absolute  text-white px-1.5 py-1 font-bold rounded-sm")}
          >
            {content.content.contents[0].text}
          </div>
        )
        }
      </div>
      <Button variant={'outline'} className='w-full'>담기</Button>
      <div>
        {product.name}
      </div>
      <div className='flex flex-col'>
        <span className='text-[#b5b5b5] line-through leading-4'>{product.sales_price}</span>
        <div className='flex gap-2 font-semibold leading-4'>
          <span className='text-[red]'>{product.discount_rate}%</span>
          <span>{product.discounted_price}</span>
        </div>
      </div>
      <div className='text-[#b5b5b5]'>
        {product.review_count}
      </div>
    </div>
  )
}
function SlideAction({ setSw }: { setSw: Dispatch<SetStateAction<SwiperClass | undefined>> }) {
  const swiper: SwiperClass = useSwiper()
  useEffect(() => {
    setSw(swiper)
  }, [swiper])
  return <></>

}
function SlideNextButton({ swiper }: { swiper: SwiperClass | undefined }) {
  if (swiper)
    return (
      <>
        <button className={cn('p-2 bg-white  rounded-full transition ease-in duration-300 absolute top-[160px] transform-y-[50%] -left-5 z-10')} onClick={() => swiper.slidePrev(4)}><ChevronLeft /></button>
        <button className={cn('p-2 bg-white  rounded-full transition ease-in duration-300 absolute top-[160px] transform-y-[50%] -right-5 z-10')} onClick={() => swiper.slideNext(4)}><ChevronRight /></button>
      </>
    );
}