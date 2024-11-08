
import React from 'react'

import { Banner, Collection, Session } from './interface';
import BannerCarousel from './components/banner-carousel';
import CollectionCard from './components/collection-card';
import Image from 'next/image';


const getSession = async (): Promise<Session> => await fetch('https://www.kurly.com/nx/api/session', { cache: 'no-cache' })
  .then(res => res.json())

const getBanner = async (session: Session): Promise<{ data: { data: Banner[] } }> => await fetch('https://api.kurly.com/main/v3/sites/market/sections/346/main-banner', {
  headers: {
    authorization: `Bearer ${session.accessToken}`
  }
}).then(res => res.json()).catch(console.log)
const getCollection = async (session: Session): Promise<{ data: Collection }> => await fetch('https://api.kurly.com/main/v3/sites/market/sections/801/random-collection', {
  headers: {
    authorization: `Bearer ${session.accessToken}`
  }
}).then(res => res.json()).catch(console.log)


export default async function Kurly() {
  const session = await getSession()
  const { data: bannerData } = await getBanner(session)
  const { data: collectionData } = await getCollection(session)
  const banners = bannerData.data

  return (
    <div className='noto-sans-kr flex flex-col gap-10 text-[#222222]'>
      <BannerCarousel banners={banners} />
      <CollectionCard collectionData={collectionData} />
      <div className='container'>
        <Image src="https://product-image.kurly.com/hdims/resize/%3E1050x%3E140/quality/85/src/banner/random-band/pc/img/1231ce96-69db-462f-b261-eb3cf494eb7c.jpg" alt="" width={1400} height={140} />
      </div>
    </div>
  )
}


