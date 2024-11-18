'use client'

import { motion } from 'framer-motion'
import dynamic from "next/dynamic"
import Image from 'next/image'
const ComputersCanvas = dynamic(() => import('@/components/canvas/Computer'))
// const SoldierCanvas = dynamic(() => import('@/three/Soldier'))

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      {/* image */}
      <div
        className='w-[338px] h-[338px] absolute left-8 top-8'>
        <Image src={'/about.png'} alt='profile image' quality={50} width={500} height={500} className='object-cover rounded-full' />
        {/* <ComputersCanvas scale={1.6} /> */}
      </div>

      {/* circle */}
      <motion.svg
        className='w-[404px] h-[404px]'
        fill='transparent'
        viewBox='0 0 404 404'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.circle
          cx='202'
          cy='202'
          r='180'
          stroke='#00ff99'
          strokeWidth={4}
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ strokeDasharray: '24 10 0 0' }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </motion.svg>
    </div>
  )
}

export default Photo