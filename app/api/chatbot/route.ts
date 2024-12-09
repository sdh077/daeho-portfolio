import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const body = await request.json()
  const supabase = await createClient()
  const { data: action, error: error1 } = await supabase
    .from('chatbot_action')
    .upsert({ ...body.action, bot_id: body.bot.id })
    .select()

  const { data: intent, error: error2 } = await supabase
    .from('chatbot_action')
    .upsert({ ...body.intent, bot_id: body.bot.id })
    .select()

  const { data: user, error } = await supabase
    .from('chatbot_request')
    .insert({
      user_id: body.userRequest.user.id,
      utterance: body.userRequest.utterance,
      params: body.userRequest.params,
      intent_id: body.intent.id,
      action_id: body.action.id,
      bot_id: body.bot.id
    })
    .select()
  console.log(error, error1, error2)

  return Response.json({ user })
}