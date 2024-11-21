'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { LinkType } from './Header';
import Logo from './Logo';

const MobileNav = ({ links }: { links: LinkType[] }) => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href={'/'}>
            <h1>
              <Logo />
            </h1>
          </Link>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map(link =>
            <Link href={link.path} key={link.name} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
              {link.name}
            </Link>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav