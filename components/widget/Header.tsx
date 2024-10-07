import React from 'react'
import Link from "next/link";
import Nav from './Nav';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';
import Logo from './Logo';

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
    name: "resume",
    path: '/resume'
  },
  {
    name: "ui",
    path: '/ui'
  },
  {
    name: "contact",
    path: '/contact'
  },

]

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href={'/'}>
          <h1 className='text-4xl font-semibold'>
            <Logo />
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Nav links={links} />
          <Link href={'/contact'}>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="lg:hidden ">
          <MobileNav links={links} />
        </div>
      </div>

    </header>
  )
}

export default Header