export interface Store {
  [x: string]: string
}

const store: Store = {
  token: '',
};

export function setStore(key: keyof Store, value: any) {
  store[key] = value;
}

export function getStore(key: keyof Store) {
  return store[key];
}
