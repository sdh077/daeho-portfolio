import { setStore, Store } from "..";

export function ThemeServerInit(store: Store) {
  Object.entries(store).map(([key, value]) => setStore(key, value))


  return null;
}