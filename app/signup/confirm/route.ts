import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "utils/supabase/server";

export async function GET(request: Request) {
  // localhost:3000/signup/confirm/?code=...
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = await createServerSupabaseClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(requestUrl.origin);
  // localhost:3000/
}
