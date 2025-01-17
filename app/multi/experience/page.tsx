import About from '@/page/About'
import Work from '@/page/Work'
import Job, { JobType } from './job'


const Experience = ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  return (
    <section className='flex flex-col justify-center lg:py-0 w-full gap-16'>
      <Job type={searchParams.type as JobType ?? 'grid'} />
      <About />
      {/* <Work /> */}
    </section>
  )
}

export default Experience