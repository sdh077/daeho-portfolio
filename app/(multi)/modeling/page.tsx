import Image from 'next/image'
import React from 'react'
import bg from '@/public/forest.png'
import { BuddhaModel } from '@/public/gltf/Buddha'
import RenderModel from '@/components/RenderModel'
import { BurgerModel } from '@/three/burger'

const page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between relative'>
      <Image src={bg} alt='background' className='w-full h-full object-cover object-center opacity-25' fill />

      <div className='w-full h-screen'>
        <RenderModel>
          <BurgerModel />
          <BuddhaModel />
        </RenderModel>
      </div>
    </div>
  )
}

export default page