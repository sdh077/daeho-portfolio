import React from 'react'
import Header from '@/components/widget/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className='fixed w-full top-0 z-50'>
        <Header />
      </div>
      <div className='h-16' />
      <StairTransition />
      <PageTransition>
        {children}
      </PageTransition>
    </div>
  )
}
