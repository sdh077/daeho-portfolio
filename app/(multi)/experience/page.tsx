import About from '@/page/About'
import Services from '@/page/Services'
import Work from '@/page/Work'


const Experience = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 lg:py-0 w-full'>
      <Services />
      <Work />
      <About />
    </section>
  )
}

export default Experience