'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'
import { LinkType } from "./Header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Nav = ({ links }: { links: LinkType[] }) => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map(link =>
        link.items ?
          <DropdownMenu key={link.name}>
            <DropdownMenuTrigger>{link.name}</DropdownMenuTrigger>
            <DropdownMenuContent>
              {link.items.map(item =>
                <DropdownMenuItem key={item.path}><Link href={item.path}>{item.name}</Link></DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          :
          <Link href={link.path} key={link.name}
            className={`${pathname.startsWith(link.path) && 'text-primary border-b-2 border-accent'} 
          capitalize font-medium hover:text-primary transition-all`}
          >
            {link.name}
          </Link>
      )}
    </nav>
  )
}

export default Nav