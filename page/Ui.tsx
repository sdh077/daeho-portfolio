"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useCreateQueryString } from "@/hooks/use-create-query-string";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

export default function UiPage({ links }: { links: string[] }) {
  const createQueryString = useCreateQueryString()
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col sm:flex-row md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[80vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map(link => link.split('.')[0]).map((link, idx) => (
                <SidebarLink key={idx} link={{ label: link, href: createQueryString('view', link) }} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

const Dashboard = () => {
  const router = useSearchParams();
  const view = router.get('view') ?? 'button';

  const Component = dynamic(() =>
    import(`@/page/example/${view?.toLowerCase()}`)
  );

  return (
    <div className="container bg-black py-4 w-full h-full">
      {Component ? <Component /> : <p>Loading component...</p>}
    </div>
  );
};
