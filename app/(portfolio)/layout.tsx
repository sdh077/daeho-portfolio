import React from 'react'
import { ModeToggle } from "@/components/mode-toggle";
import { SideMenu } from "@/components/side-menu";
import Link from "next/link";

export const links = [
  {
    title: "About ME",
    href: "about",
  },
  {
    title: "Experience",
    href: "experience",
  },
  {
    title: "Contact",
    href: "contact",
  },
  {
    title: "Portfolio",
    href: "portfolio",
  },
];

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