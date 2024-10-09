import React from 'react'
import dynamic from "next/dynamic"
const ComputersCanvas = dynamic(() => import('@/components/ui/canvas/Compouter'))
const Car = dynamic(() => import('@/components/ui/canvas/Car'))

const three = () => {
  return (
    <div className='relative w-[400px] h-full '>
      <div className='relative w-[300px] h-[300px] mx-auto'>
        <ComputersCanvas />
      </div>
      <div className='relative w-[300px] h-[300px] mx-auto'>
        <Car />
      </div>
    </div>
  )
}

export default three