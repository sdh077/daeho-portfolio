'use client'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Product, ProductDetail } from '../interface/product'
import Image from 'next/image'
import Review from './review'
import { Session } from '../interface'

const ProductBottom = ({ product, session }: { product: Product, session: Session }) => {
  const [active, setActive] = useState<'상품설명' | '상세정보' | '후기' | '문의'>('후기')
  return (
    <div className='my-12'>
      <div className='grid grid-cols-4'>
        <div onClick={() => setActive('상품설명')} className={cn(active === '상품설명' ? 'text-primary' : 'text-font', 'w-full text-center py-4 bg-gray-100 cursor-pointer')}>상품설명</div>
        <div onClick={() => setActive('상세정보')} className={cn(active === '상세정보' ? 'text-primary' : 'text-font', 'w-full text-center py-4 bg-gray-100 cursor-pointer')}>상세정보</div>
        <div onClick={() => setActive('후기')} className={cn(active === '후기' ? 'text-primary' : 'text-font', 'w-full text-center py-4 bg-gray-100 cursor-pointer')}>후기({product.review_count})</div>
        <div onClick={() => setActive('문의')} className={cn(active === '문의' ? 'text-primary' : 'text-font', 'w-full text-center py-4 bg-gray-100 cursor-pointer')}>문의</div>
      </div>
      {active === '상품설명' && <Description detail={product.product_detail} />}
      {active === '상세정보' && <DetailInfo detail={product.product_detail} />}
      {active === '후기' && <Review session={session} productNo={product.no} />}

    </div>
  )
}
function Description({ detail }: { detail: ProductDetail }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: detail.legacy_content }} className='w-full' />
    </div>
  )
}
function DetailInfo({ detail }: { detail: ProductDetail }) {
  return (
    <div>
      {detail.legacy_pi_images.map((image, i) =>
        <Image key={`image${i}`} src={image} alt='상셍' width={1200} height={1200} />
      )}
    </div>
  )
}

export default ProductBottom