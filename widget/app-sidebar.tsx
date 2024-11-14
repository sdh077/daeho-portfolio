
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar2"
import { ReactNode } from "react"

export type SideGroup = { label: string, items: SideItem[], icon?: ReactNode }
type SideItem = { title: string, url: string, icon?: ReactNode }

export function AppSidebar({ groups }: { groups: SideGroup[] }) {
  return (
    <Sidebar className="pt-20 z-40">
      <SidebarContent>
        {groups.map(group =>
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.icon}<span>{group.label}</span></SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={group.label + '-' + item.title}>
                    <SidebarMenuButton asChild>
                      <a href={`/design-system/${group.label.toLowerCase()}/${item.title.toLowerCase()}`}>
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar >
  )
}
