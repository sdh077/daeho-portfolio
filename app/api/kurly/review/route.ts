import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const productNo = searchParams.get('productNo')
  const url = `https://api.kurly.com/product-review/v3/contents-products/${productNo}/reviews?sortType=RECENTLY&size=40&onlyImage=true&filters=`
  const data = await fetch(url, {
    headers: request.headers
  }).then(res => res.json()).catch(console.log)
  return Response.json(data)
}