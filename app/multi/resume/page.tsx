
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import * as motion from "framer-motion/client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const about = {
  title: 'About me',
  description: '',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Shin Daeho',
    },
    {
      fieldName: 'Education',
      fieldValue: 'Handong University',
    },
    {
      fieldName: 'Phone',
      fieldValue: '010-6256-6164',
    },
    {
      fieldName: 'Experience',
      fieldValue: '4+ Years',
    },
    {
      fieldName: 'Email',
      fieldValue: 'sdh077@naver.com',
    },
    {
      fieldName: 'Address',
      fieldValue: '서울시 동대문구 한천로',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    }
  ]
}
const experience = {
  icon: '',
  title: 'My expericence',
  description: '',
  items: [
    {
      company: '어반데이터',
      position: 'Full Stack Developer',
      duration: '2023.10~2024.01'
    },
    {
      company: '히포티앤씨',
      position: 'Front End Developer',
      duration: '2023.02~2024.08 ',
    },
    {
      company: '플레이오토',
      position: 'Software Developer',
      duration: '2019.03~2021.04',
    },
    {
      company: '이츠엠',
      position: 'Full Stack Developer',
      duration: '2016.08~2017.07',
    },
  ]
}
const skills = {
  title: "My Skills",
  description: '',
  list: [
    {
      icon: <FaHtml5 />,
      name: "html5"
    },
    {
      icon: <FaCss3 />,
      name: "css3"
    },
    {
      icon: <FaJs />,
      name: "js"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
  ]
}
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn'
        }
      }}
    // className=' flex items-center justify-center py-12 lg:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col lg:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto lg:mx-0'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>
          <div className='h-full w-full'>
            <TabsContent className='w-full' value='experience'>
              <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>
                  {experience.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                  {experience.items.map((item, idx) =>
                    <li key={idx} className='bg-[#232329] text-white/60 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1'>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent' />
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </TabsContent>
            <TabsContent className='w-full' value='skills'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-font/60 mx-auto lg:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
                  {skills.list.map(skill =>
                    <li key={skill.name}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group gap-4'>
                            <div className='text-6xl text-white/60 group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize '>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )}
                </ul>
              </div>
            </TabsContent>
            <TabsContent className='w-full' value='about'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0'>
                  {about.info.map(info =>
                    <li key={info.fieldName} className='flex items-center justify-center lg:justify-start gap-4'>
                      <span className='text-font/60'>{info.fieldName}</span>
                      <span className='text-xl'>{info.fieldValue}</span>
                    </li>
                  )}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume