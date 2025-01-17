'use client'
import Image from 'next/image'
import React from 'react'
import bg from '@/public/forest.png'
import BuddhaModel from '@/three/Buddha'
import RenderModel from '@/components/RenderModel'
import BurgerModel from '@/three/burger'
import Box from './box'

const page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between relative'>
      <div className='w-full h-screen'>
        <RenderModel>
          <Box />
          {/* <BurgerModel /> */}
          <BuddhaModel />
        </RenderModel>
      </div>
    </div>
  )
}

export default page