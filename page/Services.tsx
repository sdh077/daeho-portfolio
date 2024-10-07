'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowBottomRightIcon } from '@radix-ui/react-icons'

const services = [
  {
    num: '01',
    title: '어반유니온',
    duration: '2023.10 - 2024.01',
    describe: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ad inventore ea commodi aspernatur, ullam numquam recusandae maiores exercitationem tempora.',
    href: ''
  },
  {
    num: '02',
    title: '2023.10 – 2024.01 — 어반유니온',
    duration: '2023.10 - 2024.01',
    describe: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ad inventore ea commodi aspernatur, ullam numquam recusandae maiores exercitationem tempora.',
    href: ''
  }, {
    num: '03',
    title: '2023.10 – 2024.01 — 어반유니온',
    duration: '2023.10 - 2024.01',
    describe: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ad inventore ea commodi aspernatur, ullam numquam recusandae maiores exercitationem tempora.',
    href: ''
  },
  {
    num: '04',
    title: '2023.10 – 2024.01 — 어반유니온',
    duration: '2023.10 - 2024.01',
    describe: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ad inventore ea commodi aspernatur, ullam numquam recusandae maiores exercitationem tempora.',
    href: ''
  }
]

const Services = () => {
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
        {services.map(service =>
          <div key={service.num} className='flex flex-1 flex-col justify-center gap-6 group'>
            <div className='w-full flex justify-between items-center'>
              <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                {service.num}
              </div>
              <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                <ArrowBottomRightIcon className='text-primary w-8 h-8' />
              </Link>
            </div>
            <h2 className='text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
            <p>{service.duration}</p>
            <p className='text-white/60'>{service.describe}</p>
            <div className='border-b border-white/20 w-full' />
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Services