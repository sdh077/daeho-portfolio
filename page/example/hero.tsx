import MagicButton from '@/components/effect-ui/MagicButton'
import { Spotlight } from '@/components/effect-ui/Spotlight'
import { TextGenerateEffect } from '@/components/effect-ui/TextGenerateEffect'
import { BoxesCore } from '@/components/ui/BoxesCore'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

const HeroExample = () => {
  return (
    <div className='w-full h-full flex flex-col gap-8'>
      <div className='overflow-hidden w-full h-[20vh] relative'>
        <div className='text-7xl flex justify-center items-center h-full w-full'>
          Transforming Concepts into Seamless User Ex
        </div>
        <BoxesCore />
      </div>
      <div className='overflow-hidden w-full h-[60vh] relative overflow-y-scroll'>
        <Hero />
      </div>
    </div>
  )
}
const Hero = () => {
  return (
    <div className='pb-8 pt-6'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw' fill='blue' />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Dynamic Web Magic With Next.js
          </h2>

          <TextGenerateEffect
            className=' text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Transforming Concepts into Seamless User Ex'
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Daeho
          </p>
          <a href='#about'>
            <MagicButton
              title='show my work'
              icon={<FaLocationArrow />}
              position='right'
              otherClasses=''
            />
          </a>
        </div>
      </div>
    </div>
  )
}
export default HeroExample