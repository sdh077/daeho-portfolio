"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useCreateQueryString } from "@/hooks/use-create-query-string";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UiSidebar({ pages, components }: { pages: string[], components: string[] }) {
  const createQueryString = useCreateQueryString()

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const view = params.get('view')
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col container w-full mx-auto gap-4",
      )}
    >
      <div className="mt-8 flex gap-2">
        {pages.map(link => link.split('.')[0]).map((link, idx) => (
          <Link key={idx} href={createQueryString('view', `pages/${link}`)} >
            <Button variant={view === `pages/${link}` ? "default" : "secondary"}>
              {link}
            </Button>
          </Link>
        ))}
      </div>
      <div className="border-b-2 border-primary" />
      <div className="mt-8 flex gap-2">
        {components.map(link => link.split('.')[0]).map((link, idx) => (
          <Link key={idx} href={createQueryString('view', `components/${link}`)} >
            <Button variant={view === `components/${link}` ? "default" : "secondary"}>
              {link}
            </Button>
          </Link>
        ))}
      </div>

    </div>
  );
  // return (
  //   <div
  //     className={cn(
  //       "-md flex sm:flex-row md:flex-row w-full flex-1 mx-auto gap-4 ",
  //     )}
  //   >
  //     <Sidebar open={open} setOpen={setOpen}>
  //       <SidebarBody className="justify-between gap-10">
  //         <div className="flex flex-col flex-1 overflow-x-hidden">
  //           <div className="mt-8 flex flex-col gap-2">
  //             {pages.map(link => link.split('.')[0]).map((link, idx) => (
  //               <SidebarLink key={idx} link={{ label: link, href: createQueryString('view', `pages/${link}`) }} />
  //             ))}
  //           </div>
  //           <div className="border-[1px] bg-primary" />
  //           <div className="mt-8 flex flex-col gap-2">
  //             {components.map(link => link.split('.')[0]).map((link, idx) => (
  //               <SidebarLink key={idx} link={{ label: link, href: createQueryString('view', `components/${link}`) }} />
  //             ))}
  //           </div>
  //         </div>
  //       </SidebarBody>
  //     </Sidebar>
  //   </div>
  // );
}