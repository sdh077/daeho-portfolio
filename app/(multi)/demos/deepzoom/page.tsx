import React from 'react'
import { ImageUpload } from './image-upload';
import dynamic from 'next/dynamic';
const Deepzoom = dynamic(() => import("./deepzoom"), {
  ssr: false,
});
export default function page() {

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full container gap-8'>
      {/* <ImageUpload /> */}
      <Deepzoom deepzoom={'두오모'} className='relative md:col-span-2' />
      <Deepzoom deepzoom={'돈까스'} />
      <Deepzoom deepzoom={'nebula'} className='md:col-span-3' />
    </div>
  )
}
