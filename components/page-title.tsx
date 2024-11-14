'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const PageTitle = () => {
  const pathname = usePathname().split('/')
  const title = pathname[pathname.length - 1]

  return (
    <div className='scroll-m-20 text-2xl md:text-5xl font-bold tracking-tight'>{title}</div>
  )
}

export default PageTitle