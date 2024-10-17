"use client";

import React, { useEffect, useState } from "react";
import ThemeProvider from "./theme-provider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { FilterStoreProvider } from "@/stores/filter-store-provider";
import { StoreInit } from "@/stores/store/init";
import Cookies from "js-cookie"

const queryClient = new QueryClient()
export default function Provider({ children, ...props }: { children: React.ReactNode }) {
  const [isMount, setMount] = useState(false)
  const theme = Cookies.get('theme') ?? 'light'

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return null
  }
  return (
    <>
      <StoreInit token='' />
      <FilterStoreProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            attribute="class"
            defaultTheme={theme}
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