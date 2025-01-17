'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowBottomRightIcon } from '@radix-ui/react-icons'
import { Job } from '@/app/multi/experience/job'
import { Timeline } from '@/components/ui/timeline'
import { Textarea } from '@/components/ui/textarea'

const Timelines = ({ jobs }: { jobs: Job[] }) => {
  const data = jobs.map(job => ({
    title: `${job.num} ${job.title}`,
    content: (
      <div>
        <p className="text-neutral-500 text-xs md:text-sm font-normal mb-8">
          {job.duration}
        </p>
        <div className="">
          <Textarea className='h-96' value={job.describe}>{job.describe}</Textarea>
        </div>
      </div>
    )
  }))
  return (
    <div className='container mx-auto'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }
        }}
        className=''
      >
        <Timeline data={data} />
      </motion.div>
    </div>
  )
}

export default Timelines