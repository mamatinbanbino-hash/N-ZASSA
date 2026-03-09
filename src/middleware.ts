import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data: { session } } = await supabase.auth.getSession();

  // 1. Si l'utilisateur n'est pas connecté et essaie d'aller sur le feed
  if (!session && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // 2. Vérification du statut de bannissement
  if (session) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('status')
      .eq('id', session.user.id)
      .single();

    if (profile?.status === 'banned') {
      return NextResponse.redirect(new URL('/banned', req.url));
    }
  }

  return res;
}
