'use client'

import { motion } from 'framer-motion'
import dynamic from "next/dynamic"
import Image from 'next/image'
const ComputersCanvas = dynamic(() => import('@/components/canvas/Computer'))
// const SoldierCanvas = dynamic(() => import('@/three/Soldier'))

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" }
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" }
          }}
          className='w-[202px] h-[202px] absolute left-8 top-8'>
          <Image src={'/about.png'} alt='' priority quality={50} fill className='object-contain rounded-full' />
          {/* <ComputersCanvas scale={1.6} /> */}
        </motion.div>

        {/* circle */}
        <motion.svg
          className='w-[272px] h-[272px]'
          fill='transparent'
          viewBox='0 0 202 202'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='101'
            cy='101'
            r='90'
            stroke='var(--primary)'
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
      </motion.div>
    </div>
  )
}

export default Photo