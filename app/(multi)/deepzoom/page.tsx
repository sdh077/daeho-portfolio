import React from 'react'
import { ImageUpload } from './image-upload';
import dynamic from 'next/dynamic';
const Deepzoom = dynamic(() => import("./deepzoom"), {
  ssr: false,
});
export default function page() {

  return (
    <>
      <ImageUpload />
      <Deepzoom />
    </>
  )
}
