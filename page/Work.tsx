'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { FaArrowsUpDownLeftRight } from "react-icons/fa6"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import Image from "next/image"
import { Swiper as SwiperClass } from "swiper/types"
import WorkSliderBtns from "@/components/WorkSliderBtns"
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, doloremque?",
    stack: [{ name: "Html 5" }, { name: "css 3" }, { name: "Next" }],
    image: '/jsm-logo.png',
    live: "",
    github: ""
  }, {
    num: "02",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, doloremque?",
    stack: [{ name: "Html 5" }, { name: "css 3" }, { name: "Next" }],
    image: '/jsm-logo.png',
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, doloremque?",
    stack: [{ name: "Html 5" }, { name: "css 3" }, { name: "Next" }],
    image: '/jsm-logo.png',
    live: "",
    github: ""
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex

    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0 w-full"
    >
      <div className="w-screen lg:container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 text-xl text-accent">
                {project.stack.map((item, idx) =>
                  <li key={idx} className="">{item.name}{idx !== project.stack.length - 1 && ","}</li>
                )}
              </ul>
              <div className="border border-white/20" />
              <div className="flex gap-4">
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <FaArrowsUpDownLeftRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <FaGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map(project =>
                <SwiperSlide key={project.num} className="w-full" >
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              )}
              <WorkSliderBtns
                containerStyles={"flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"}
                btnStyles={"bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full lg:rounded-none"}
                iconsStyles="" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work