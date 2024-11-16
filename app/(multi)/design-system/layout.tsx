import { cookies } from "next/headers"
import { Breadcrumb } from "@/components/breadcrumb"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar2"
import { AppSidebar, SideGroup } from "@/widget/app-sidebar"
import PageTitle from "@/components/page-title"

// Menu items.
const sides: SideGroup[] = [
  {
    label: "Foundation",
    items: [
      {
        title: 'Color',
        url: '#'
      },
      {
        title: 'Spacing',
        url: '#'
      },
      {
        title: 'Typo',
        url: '#'
      }
    ],
  },
  {
    label: 'Components',
    items: [
      {
        title: "button",
        url: "#",
      },
      {
        title: "card",
        url: "#",
      },
      {
        title: "input",
        url: "#",
      },
      {
        title: "form",
        url: "#",
      },
      {
        title: "navbar",
        url: "#",
      },
    ]
  }
]
export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar groups={sides} />
      <main className="container">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Breadcrumb />
        </div>
        <div className="my-8">
          <PageTitle />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}
