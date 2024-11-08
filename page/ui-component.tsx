"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useCreateQueryString } from "@/hooks/use-create-query-string";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useFetchData } from "@/data/fetch-photo";

const Dashboard = () => {
  const router = useSearchParams();
  const view = router.get('view') ?? 'components/button';

  const Component = dynamic(() =>
    import(`@/page/example/${view?.toLowerCase()}`)
  );

  return (
    <div className="container w-full py-8">
      {Component ? <Component /> : <p>Loading component...</p>}
    </div>
  );
};

export default Dashboard