

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import * as motion from 'framer-motion/client'
import ContactForm from "@/page/contact-form"
const info = [
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
        <div className="flex flex-col lg:flex-row gap-[30px] items-start">
          <div className="lg:w-[54%] order-2 lg:order-none">
            <ContactForm />
          </div>
          <div className="lg:sticky top-20 flex-1 flex items-center lg:justify-center order-1 lg:order-none mb-8 lg:mb-0">
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