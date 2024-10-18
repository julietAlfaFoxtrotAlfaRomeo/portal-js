// middleware/middleware.ts

import { parse } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookies = req.headers.get('cookie') || '';
  const cookiesParsed = parse(cookies);
  const userSession = cookiesParsed['user-session'];

  if (!userSession) {
    // Redirect to login page if no session
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const session = JSON.parse(userSession);

  if (pathname.startsWith('/admin') && session.role !== 'admin' && session.role !== 'super_admin') {
    // Redirect to unauthorized page if the user is not an admin
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  if (pathname.startsWith('/sadmin') && session.role !== 'super_admin') {
    // Redirect to unauthorized page if the user is not a super admin
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
}
