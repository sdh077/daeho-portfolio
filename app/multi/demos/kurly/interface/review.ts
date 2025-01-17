export default interface IReview {
  no: number
  type: string
  contents: string
  dealProductNo: number
  dealProductName: string
  contentsProductNo: number
  contentsProductName: string
  likeCount: number
  isLike: boolean
  visibility: string
  ownerGrade: string
  ownerName: string
  registeredAt: string
  modifiedAt: string
  ownerProfiles: OwnerProfiles
  productImageUrl: string
  images: Image[]
  comments: any[]
  isMembership: boolean
  orderType: string
  productVerticalSmallUrl: string
}

export interface OwnerProfiles {
  beautyProfile: string
  marketProfile: string
}

export interface Image {
  no: number
  image: string
  reviewSquareSmallUrl: string
}
