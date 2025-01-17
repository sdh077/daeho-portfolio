'use client'
import React, { useState } from 'react'
import dynamic from "next/dynamic"
import { Slider } from '@/components/ui/slider'
const ComputersCanvas = dynamic(() => import('@/components/canvas/Computer'))
const Car = dynamic(() => import('@/components/canvas/Car'))

const Three = () => {
  const [slideValue, setSlideValue] = useState([80])
  const handleChange = (value: number[]) => {
    setSlideValue(value);
  };
  const scale = slideValue[0] / 100 * 2
  return (
    <div className='relative container h-full '>
      <Slider
        defaultValue={slideValue}
        max={100}
        step={1}
        className='my-4'
        value={slideValue}
        onValueChange={handleChange}
      />
      <div className='relative w-full h-[300px] mx-auto'>
        <ComputersCanvas scale={scale} />
      </div>

      <div className='relative w-full h-[300px] mx-auto'>
        <Car scale={scale} />
      </div>
    </div>
  )
}

export default Three