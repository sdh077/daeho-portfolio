'use client'
import { Slash } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react"

export default function BreadcrumbWithSeparator({ items }: { items: string[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem >
              {index < items.length - 1 ? (
                <BreadcrumbLink href={`${items.slice(0, index + 1).join('/')}`}>
                  {item}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator ><Slash /></BreadcrumbSeparator >}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
