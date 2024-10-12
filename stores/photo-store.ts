import { create } from 'zustand';
import { Photo } from '@/interface/photo';
import { useQuery } from '@tanstack/react-query';

export type State = {
  photos: Photo[]
}

export type Actions = {
  setPhoto: (photos: Photo[]) => void;
}

export type Store = State & Actions

const defaultInitState: Photo[] = []

const usePhotoStore = create<Store>((set) => ({
  photos: defaultInitState,
  setPhoto: (photos: Photo[]) => set(() => ({ photos })),
}));

const getPhotos = async () => fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())

export default usePhotoStore;
