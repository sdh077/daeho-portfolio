
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
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
      fieldName: 'Home',
      fieldValue: '서울시 동대문구 한천로',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    }
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
      name: "Nodejs"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind"
    },
    {
      icon: <SiNextdotjs />,
      name: "Nextjs"
    },
  ]
}
const About = () => {
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
      className='grid md:grid-cols-2 gap-8 mt-16 items-center justify-center pb-12  w-full'
    >
      <div className='flex flex-col gap-[30px] w-full mb-8'>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
          {skills.list.map(skill =>
            <li key={skill.name}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group gap-4'>
                    <div className='text-6xl text-primary group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
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
      <div className='flex flex-col gap-[30px]'>
        <h3 className='text-4xl font-bold'>{about.title}</h3>
        <p className='max-w-[600px] text-font mx-auto lg:mx-0'>{about.description}</p>
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0'>
          {about.info.map(info =>
            <li key={info.fieldName} className='flex items-center justify-center lg:justify-start gap-4'>
              <span className='text-font/60'>{info.fieldName}</span>
              <span className='text-xl'>{info.fieldValue}</span>
            </li>
          )}
        </ul>
      </div>
    </motion.div>
  )
}

export default About