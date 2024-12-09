import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const body = await request.json()
  const supabase = await createClient()

  const { data: user, error } = await supabase
    .from('chatbot_request')
    .insert({
      user_id: body.userRequest.user.id,
      utterance: body.userRequest.utterance,
      params: body.userRequest.params,
      intent: body.intent,
      action: body.action,
      bot_id: body.bot.id
    })
    .select()
  console.log(error)

  return Response.json({ user })
}