'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'
import { LinkType } from "./Header";


const Nav = ({ links }: { links: LinkType[] }) => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map(link =>
        <Link href={link.path} key={link.name}
          className={`${link.path === pathname && 'text-primary border-b-2 border-accent'} 
          capitalize font-medium hover:text-primary transition-all`}
        >
          {link.name}
        </Link>
      )}
    </nav>
  )
}

export default Nav