import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const body = await request.json()
  const supabase = createClient()
  const { data, error } = await supabase.from('contact').insert(body)

  console.log(data, error)
  return Response.json({ data })
}