import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import * as motion from 'framer-motion/client'
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "010-6256-6164"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sdh077@naver.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "서울시 동대문구 한천로"
  }
]

const Contact = () => {
  return (
    <motion.section
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet.ipsum dolor sit amet.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel></SelectLabel>
                    <SelectItem value="est">WebDevelopment</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <Button type="submit" size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center lg:justify-center order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, idx) =>
                <li key={idx} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72p] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl ">{item.description}</h3>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact