'use client'

import BreadcrumbWithSeparator from '@/widget/breadcrumb-width-separator'
import { usePathname } from 'next/navigation'

export function Breadcrumb() {
  const pathname = usePathname()
  return <BreadcrumbWithSeparator items={pathname.split('/')} />
}