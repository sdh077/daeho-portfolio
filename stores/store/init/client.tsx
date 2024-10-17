"use client";

import { setStore, Store } from "..";

export function ThemeClientInit(store: Store) {
  Object.entries(store).map(([key, value]) => setStore(key, value))

  return null;
}