import React from 'react'

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      {children}
    </h2>
  )
}
