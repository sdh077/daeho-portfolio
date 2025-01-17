import React from 'react'
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";



const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <div className="absolute z-50 top-0  w-full ">
        <div className='container flex justify-between'>
          <Link href='/' className="font-semibold">
            <span className="text-xl">Software Developer</span>
            <h1 className="text-2xl mb-6">
              Hello I&apos;m <br /> <span className="text-4xl text-accent">Shin Daeho</span>
            </h1>
          </Link>
          <div className="flex gap-2">
            <ModeToggle />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default layout