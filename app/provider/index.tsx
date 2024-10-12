"use client";

import React, { useEffect, useState } from "react";
import ThemeProvider from "./theme-provider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { FilterStoreProvider } from "@/stores/filter-store-provider";
const queryClient = new QueryClient()
export default function Provider({ children, ...props }: { children: React.ReactNode }) {
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return null
  }
  return (
    <>
      <FilterStoreProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </FilterStoreProvider>
    </>
  )
}