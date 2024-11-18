import React, { ReactNode } from 'react'
import { Product } from '../interface/product';
import Image from 'next/image';

export function ProductTop({ product }: { product: Product }) {
  const storage = {
    'FROZEN': {
      main: '냉동 (종이포장)',
      sub: '택배배송은 에코 포장이 스티로폼으로 대체됩니다.'
    },
    'COLD': {
      main: '냉장 (종이포장)',
      sub: '택배배송은 에코 포장이 스티로폼으로 대체됩니다.'
    }
  }
  return (
    <div className='flex gap-16'>
      <div className='relative w-[40%]'>
        <div>

        </div>
        <Image src={product.main_image_url} alt='main image' fill className='object-cover' />
      </div>
      <div className='min-h-80 w-[60%]'>
        <div className='flex flex-col'>
          <div>{product.delivery_type_names.join(' ')}</div>
          <div>{product.name}</div>
          <div>{product.short_description}</div>
        </div>
        <div>
          <div className='flex gap-4'>
            <div>{product.discount_rate}%</div>
            <div>{product.discounted_price}원~</div>
          </div>
          <div>{product.base_price}원</div>
        </div>
        <div>{product.product_origin}</div>

        <div className='flex flex-col'>
          <KurlyInfo title='배송'>
            <div>
              {product.delivery_type_infos.map(delivery_type_info => (
                <div key={delivery_type_info.type}>
                  <div>{delivery_type_info.type}</div>
                  <div className='text-xs'>{delivery_type_info.guide}</div>
                </div>
              ))}
            </div>
          </KurlyInfo>
          <KurlyInfo title='판매자'>
            <div>
              {product.seller_profile.map(seller_profile => (
                <div key={seller_profile.description}>
                  <div>{seller_profile.description}</div>
                </div>
              ))}
            </div>
          </KurlyInfo>
          <KurlyInfo title='포장타입'>
            <div>
              {product.storage_type.map(storage_type => (
                <div key={storage_type}>
                  <div>{storage[storage_type]?.main}</div>
                  <div className='text-xs'>{storage[storage_type]?.sub}</div>
                </div>
              ))}
            </div>
          </KurlyInfo>
          <KurlyInfo title='판매단위'>
            <div>
              {product.sales_unit}
            </div>
          </KurlyInfo>
          <KurlyInfo title='중량/용량'>
            <div>
              {product.volume}
            </div>
          </KurlyInfo>
          <KurlyInfo title='알레르기정보'>
            <div>
              {product.allergy.split('\n').map((allergy, i) =>
                <div key={`allergy${i}`}>{allergy}</div>
              )}
            </div>
          </KurlyInfo>
          <KurlyInfo title='안내사항'>
            <div>
              {product.guides.map((guide, i) =>
                <div key={`guide${i}`}>{guide}</div>
              )}
            </div>
          </KurlyInfo>
          <KurlyInfo title='상품선택'>
            <div>
              {product.deal_products.map((deal_product, i) =>
                <div key={deal_product.no}>
                  <div>{deal_product.name}</div>
                  <div className='flex justify-between'>
                    <div className='w-8 h-8'>5</div>
                    {deal_product.discounted_price ?
                      <div className='flex'>
                        <div className='line-through'>
                          {deal_product.base_price}
                        </div>
                        <div>
                          {deal_product.discounted_price}
                        </div>
                      </div>
                      :
                      <div>
                        {deal_product.base_price}
                      </div>
                    }
                  </div>
                </div>
              )}
            </div>
          </KurlyInfo>
        </div>
      </div>
    </div>
  )
}

function KurlyInfo({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className='flex'>
      <div className='w-32 text-sm'>
        {title}
      </div>
      <div className='w-full text-sm'>
        {children}
      </div>
    </div>
  )
}
