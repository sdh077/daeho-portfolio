import React from 'react'
import Link from "next/link";
import Nav from './Nav';
import { Button } from '@/components/ui/button';
import MobileNav from './MobileNav';
import Logo from './Logo';
import { ModeToggle } from '../components/mode-toggle';

export type LinkType = {
  name: string;
  path: string;
}
const links: LinkType[] = [
  {
    name: "home",
    path: '/'
  },
  {
    name: "Experience",
    path: '/experience'
  },
  {
    name: "design system",
    path: '/design-system'
  },
  {
    name: "deepzoom",
    path: '/deepzoom'
  },
  {
    name: "contact",
    path: '/contact'
  },

]

const Header = () => {
  return (
    <header className='py-2 xl:py-4 bg-background z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href={'/'}>
          <h1 className='text-4xl font-semibold'>
            <Logo />
          </h1>
        </Link>
        <div className='flex gap-8'>
          <div className="hidden lg:flex items-center gap-8">
            <Nav links={links} />
          </div>

          <div className="lg:hidden ">
            <MobileNav links={links} />
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header