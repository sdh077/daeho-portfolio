import { Store } from "..";
import { ThemeClientInit } from "./client";
import { ThemeServerInit } from "./server";


export function StoreInit({ store }: Store) {
  return (
    <>
      <ThemeServerInit store={store} />
      <ThemeClientInit store={store} />
    </>
  );
}