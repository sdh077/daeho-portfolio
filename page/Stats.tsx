'use client'

import CountUp from 'react-countup'

const stats = [
  {
    num: 4,
    text: "Year of experience"
  },
  {
    num: 26,
    text: "Projects Complete"
  },
  {
    num: 8,
    text: "Tech"
  },
  {
    num: 500,
    text: "Code"
  }
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 lg:pt-9 lg:pb-0'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:flex-wrap items-start justify-start flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none'>
          {stats.map(stat =>
            <div key={stat.text}
              className='grid grid-cols-2 lg:flex lg:flex-1 gap-4 w-full'>
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className='text-4xl lg:text-6xl font-extrabold'
              />
              <div className={`w-full leading-snug text-white/80`}>{stat.text}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Stats