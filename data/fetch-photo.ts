import { Photo } from '@/interface/photo';
import usePhotoStore from '@/stores/photo-store';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

const getPhotos = async () => fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())

export const useFetchData = () => {
  const { setPhoto } = usePhotoStore((state) => state); // Zustand의 상태 갱신 함수 불러오기
  const query = useQuery({
    queryKey: ['fetchPhotos'], queryFn: getPhotos
  })
  useEffect(() => {
    setPhoto(query.data)
  }, [query.isLoading])
};
