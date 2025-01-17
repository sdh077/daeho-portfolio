

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
      id="contact"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" }
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] items-start">
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact