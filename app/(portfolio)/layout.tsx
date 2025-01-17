import React from 'react'
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";



const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <div className="absolute z-50 top-0  w-full ">
        <div className='container flex justify-between'>
          <Link href='/' className="font-semibold">
            <div className="text-sm">Software Developer</div>
            <div className="text-3xl">신대호</div>
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