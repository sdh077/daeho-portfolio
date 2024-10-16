'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowBottomRightIcon } from '@radix-ui/react-icons'
import { Job } from '@/app/(multi)/experience/job'


const Services = ({ jobs }: { jobs: Job[] }) => {
  return (
    <div className='container mx-auto'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }
        }}
        className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
      >
        {jobs.map(jobs =>
          <div key={jobs.num} className='flex flex-1 flex-col justify-start gap-6 group'>
            <div className='w-full flex justify-between items-center'>
              <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                {jobs.num}
              </div>
              <Link href={jobs.href} className='w-[70px] h-[70px] rounded-full bg-primary group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                <ArrowBottomRightIcon className='text-font w-8 h-8' />
              </Link>
            </div>
            <h2 className='text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{jobs.title}</h2>
            <p>{jobs.duration}</p>
            <pre className='text-white/60'>{jobs.describe}</pre>
            <div className='border-b border-white/20 w-full' />
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Services