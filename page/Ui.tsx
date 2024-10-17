"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useCreateQueryString } from "@/hooks/use-create-query-string";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useFetchData } from "@/data/fetch-photo";
import usePhotoStore from "@/stores/photo-store";

export default function UiPage({ links }: { links: string[] }) {
  const query = useFetchData();
  const createQueryString = useCreateQueryString()
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "-md flex flex-col sm:flex-row md:flex-row w-full flex-1 max-w-7xl mx-auto gap-4",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map(link => link.split('.')[0]).map((link, idx) => (
                <SidebarLink key={idx} link={{ label: link, href: createQueryString('view', link) }} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="bg-primary min-h-[60vh] w-[2px]" />
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
    <div className="w-screen overflow-hidden py-8">
      {Component ? <Component /> : <p>Loading component...</p>}
    </div>
  );
};
