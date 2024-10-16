'use client'

import { motion } from 'framer-motion'
import dynamic from "next/dynamic"
const ComputersCanvas = dynamic(() => import('@/components/canvas/Computer'))
// const SoldierCanvas = dynamic(() => import('@/three/Soldier'))

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" }
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
          }}
          className='w-[298px] h-[298px] lg:w-[398px] lg:h-[398px] mix-blend-lighten absolute'>
          {/* <Image src={'/about.png'} alt='' priority quality={50} fill className='object-contain' /> */}
          <ComputersCanvas />
        </motion.div>

        {/* circle */}
        <motion.svg
          className='w-[300px] lg:w-[404px] h-[300px] lg:h-[404px]'
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
      </motion.div>
    </div>
  )
}

export default Photo