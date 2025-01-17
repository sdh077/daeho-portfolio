import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Session } from '../interface'
import IReview from '../interface/review'
import Image from 'next/image'

const Review = ({ session, productNo }: { session: Session, productNo: number }) => {
  const url = `/api/kurly/review?productNo=${productNo}`
  const fetchReview = async (): Promise<{ data: IReview[]; meta: { pagination: { after: String } } }> => await fetch(url, {
    headers: {
      authorization: `Bearer ${session.accessToken}`
    }
  }).then(res => res.json()).catch(console.log)
  const { data, error } = useQuery({ queryKey: ['reviews', 1], queryFn: fetchReview })
  if (!data) return <></>
  const { data: reviews, meta } = data
  return (
    <div>{reviews?.map(review =>
      <div key={review.no} className='border-t-2'>
        <div>{review.dealProductName}</div>
        <div>{review.ownerName}</div>
        <div>{review.contents}</div>
        <div className='flex'>{review.images?.map(image =>
          <Image src={image.image} key={image.no} alt='review' width={64} height={64} />
        )}</div>
      </div>
    )}</div>
  )
}

export default Review