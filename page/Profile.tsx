import { Button } from "@/components/ui/button"
import Photo from "@/widget/Photo"
import Socials from "@/widget/Socials"
import Image from "next/image"
import Link from "next/link"
import { FaFileDownload } from "react-icons/fa"

const Profile = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
        <div className="text-center lg:text-left order-2 lg:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-6">
            Hello I&apos;m <br /> <span className="text-accent">Shin Daeho</span>
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
            <div className="my-8 lg:mb-0">
              <Socials
                containerStyles={"w-8 h-8 flex gap-6"}
                iconStyles={"w-8 h-8 p-2 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"} />
            </div>

          </div>
        </div>
        <div className="order-1 lg:order-none mb-8 lg:mb-0">
          <Photo />
        </div>
      </div>
    </div>
  )
}

export default Profile