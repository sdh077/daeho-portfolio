import React from 'react'
import { InfiniteMovingCards } from './effect-ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className="py-20">
      <h1 className="heading text-white">
        Kind words from{" "}
        <span className="text-purple"> satisfied clients
        </span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
    </div>
  )
}

export default Clients