import './kurly.css'
import React, { ReactNode } from 'react'

import { Banner, Collection, Session } from './interface';
import BannerCarousel from './components/banner-carousel';
import CollectionCard from './components/collection-card';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Product } from './interface/product';
import { Input } from '@/components/ui/input';
import ProductBottom from './components/product-bottom';
import { ProductTop } from './components/product-top';


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

const getProduct = async (session: Session, no: number): Promise<{ data: Product }> => await fetch(`https://api.kurly.com/showroom/v2/products/${no}`, {
  headers: {
    authorization: `Bearer ${session.accessToken}`
  }
}).then(res => res.json()).catch(console.log)


export default async function Kurly({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const session = await getSession()
  const goods = Number(searchParams['goods'] ?? '5037259')
  return (
    <div className='noto-sans-kr flex flex-col gap-10 text-font'>
      <KurlyMain session={session} />
      <KurlyDetail session={session} goods={goods} />
    </div>
  )
}
async function KurlyMain({ session }: { session: Session }) {
  const { data: bannerData } = await getBanner(session)
  const { data: collectionData } = await getCollection(session)
  const banners = bannerData.data

  return (
    <>
      <BannerCarousel banners={banners} />
      <CollectionCard collectionData={collectionData} />
      <div className='container'>
        <Image src="https://product-image.kurly.com/hdims/resize/%3E1050x%3E140/quality/85/src/banner/random-band/pc/img/1231ce96-69db-462f-b261-eb3cf494eb7c.jpg" alt="" width={1400} height={140} />
      </div>
    </>
  )
}
async function KurlyDetail({ session, goods }: { session: Session, goods: number }) {
  const { data: product } = await getProduct(session, goods)

  return (
    <div className='container'>
      <ProductTop product={product} />
      <ProductBottom product={product} session={session} />
    </div>
  )
}
