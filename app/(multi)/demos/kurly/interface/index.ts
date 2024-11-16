export type Session = {
  accessToken: string;
  uid: string;
  isGuest: boolean
}
export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  image_url: string;
  link: string;
  main_banner_pc_url: string;
  main_banner_mobile_url: string;
}

export type Collection = {
  id: number;
  title: string;
  subtitle: string;
  additional_text: string;
  template_code: string;
  template_type: string;
  event_code: string;
  data: {
    collection_code: string;
    has_more: boolean;
    products: CollectionProduct[]
  }
}
export type CollectionProduct = {
  no: number;
  name: string;
  short_description: string;
  list_image_url: string;
  product_vertical_medium_url: string;
  sales_price: number;
  discounted_price: number;
  discount_rate: number;
  is_multiple_price: boolean;
  is_buy_now: boolean;
  is_purchase_status: boolean;
  is_giftable: boolean;
  is_only_adult: boolean;
  is_shown: boolean;
  is_sold_out: boolean;
  sold_out_title: string;
  sold_out_text: string;
  can_restock_notify: boolean;
  product_view_status: string;
  not_purchase_message: string;
  delivery_type_names: string[];
  delivery_type_infos: {
    type: string;
    description: string;
  }[]
  tags: string[]
  sticker: {
    content: {
      text: string
      weight: string;
    }[]
    opacity: number;
    background_color: string;
  } | null
  stickers: Sticker[]
  stickers_v2: Sticker[]
  group_product: {
    is_group: boolean;
    is_not_representative: boolean
  }
  review_count: string;

}

export type Sticker = {
  type: 'TOP_LEFT_TEXT' | 'BOTTOM_CENTER_TEXT';
  content: {
    contents: {
      text: string;
      opacity: number;
      font_style: string;
      font_effect: string;
      font_color_code: string;
    }[]
    background_opacity: number;
    background_color_code: string;
  }
}