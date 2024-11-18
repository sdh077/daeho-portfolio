
export interface Product {
  no: number
  name: string
  short_description: string
  is_sold_out: boolean
  sold_out_text: string
  not_sales_text: string
  extra_infos: any[]
  delivery_type_names: string[]
  delivery_type_infos: DeliveryTypeInfo[]
  is_reservable: boolean
  reservation_possible_dates: any
  base_price: number
  retail_price: any
  discounted_price: number
  discount_rate: number
  is_expected_point: boolean
  expected_point: number
  expected_point_ratio: number
  is_direct_order: boolean
  direct_order_type: string
  normal_order_policy: NormalOrderPolicy
  gift_order_policy: GiftOrderPolicy
  min_ea: number
  max_ea: any
  can_restock_notify: boolean
  is_multiple_price: boolean
  main_image_url: string
  share_image_url: string
  product_vertical_large_url: string
  product_vertical_small_url: string
  product_horizontal_large_url: string
  original_image_url: string
  legacy_promotion: any
  is_purchase_status: boolean
  is_giftable: boolean
  is_only_adult: boolean
  is_group_product: boolean
  group_products: GroupProducts
  product_notice: ProductNotice[]
  storage_type: StorageType[]
  exception_label: any
  review_count: number
  guides: string[]
  today_brix: any
  sales_unit: string
  volume: string
  expiration_date: any
  product_origin: string
  allergy: string
  after_sale_service_info: AfterSaleServiceInfo
  is_third_part: boolean
  seller_names: string[]
  seller_profile: SellerProfile[]
  product_detail: ProductDetail
  member_benefit: MemberBenefit
  benefit_info: BenefitInfo
  member_coupon: MemberCoupon
  sites: string[]
  kurly_plcc: KurlyPlcc
  is_join_order: boolean
  join_order: JoinOrder
  cart_button_title: string
  showable_prices_tooltip: string[]
  showable_prices: ShowablePrices
  point_banner: PointBanner
  stickers: Sticker[]
  is_free_delivery: boolean
  category_ids: number[]
  return_info: ReturnInfo
  deal_products: DealProduct[]
}

export type StorageType = 'FROZEN' | 'COLD'

export interface DeliveryTypeInfo {
  type: string
  description: string
  guide: string
}

export interface NormalOrderPolicy {
  direct_order_type: string
}

export interface GiftOrderPolicy {
  direct_order_type: string
}

export interface GroupProducts {
  group_keys: any[]
  group_members: any[]
}

export interface ProductNotice {
  deal_product_no: number
  deal_product_name: string
  notices: Notice[]
}

export interface Notice {
  title: string
  description: string
}

export interface AfterSaleServiceInfo {
  contact_number: string
  information: string
}

export interface SellerProfile {
  title: string
  description: string
}

export interface ProductDetail {
  legacy_content: string
  legacy_pi_images: string[]
  legacy_event_banner: string
  content: any[]
  giveaway_contents_box: any
}

export interface MemberBenefit {
  name: string
  expected_point_ratio: number
}

export interface BenefitInfo {
  is_enable_benefit_price: boolean
  payload: string
}

export interface MemberCoupon {
  newbie_limit_datetime: any
  newbie_min_price: number
}

export interface KurlyPlcc {
  is_shown: boolean
  url: string
  benefits: Benefit[]
}

export interface Benefit {
  type: string
  value: number
  contents: string
}

export interface JoinOrder {
  banner: Banner
}

export interface Banner {
  is_show: boolean
  text: string
  contents: any[]
}

export interface ShowablePrices {
  base_price: number
  retail_price: any
  sales_price: number
}

export interface PointBanner {
  is_show: boolean
  text: string
  contents: any[]
}

export interface Sticker {
  type: string
  content: Content
}

export interface Content {
  contents: Content2[]
  background_color_code: string
  background_opacity: number
}

export interface Content2 {
  text: string
  font_color_code: string
  font_effect: string
  font_style: string
  opacity: number
}

export interface ReturnInfo {
  address: any
  one_way_cost: number
  round_trip_cost: number
}

export interface DealProduct {
  no: number
  name: string
  is_expected_point: boolean
  expected_point: number
  expected_point_ratio: number
  base_price: number
  retail_price: any
  discounted_price: number
  discount_rate: number
  buy_unit: number
  is_sold_out: boolean
  min_ea: number
  max_ea: any
  can_restock_notify: boolean
  is_purchase_status: boolean
  is_giftable: boolean
  is_only_adult: boolean
  master_product_code: string
  master_product_name: string
  can_purchase_level: boolean
  can_purchase_level_text: CanPurchaseLevelText
  membership_labels: any[]
  point_banner: PointBanner2
  category_ids: number[]
}

export interface CanPurchaseLevelText {
  title: string
  text: string
  type: any
}

export interface PointBanner2 {
  is_show: boolean
  text: string
  contents: any[]
}

export interface Meta {
  is_inquiry_writable: boolean
  is_review_writable: boolean
}
