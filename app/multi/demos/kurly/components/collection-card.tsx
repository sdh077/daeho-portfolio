import React from 'react'
import { Collection, CollectionProduct } from '../interface'
import Image from 'next/image'
import ProductCarousel from './product-carousel'

const CollectionCard = ({ collectionData }: { collectionData: Collection }) => {
  return (
    <section className='container mt-10 flex flex-col gap-8'>
      <h2 className="w-full pl-4 mx-auto text-xl md:text-4xl font-bold text-font text-center">{collectionData.title}</h2>
      <h4 className='text-font/80 text-center mt-1'>{collectionData.subtitle}</h4>
      <ProductCarousel products={collectionData.data.products.filter(product => product.is_shown)} />
    </section>
  )
}



export default CollectionCard