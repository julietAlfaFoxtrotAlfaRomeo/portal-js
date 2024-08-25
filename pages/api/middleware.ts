import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Ganti dengan logika autentikasi yang sesuai
const isAuthenticated = (req: NextRequest): boolean => {
  const token = req.cookies.get('authToken');
  return Boolean(token); 
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (url.pathname.startsWith('/admin')) {
    if (!isAuthenticated(req)) {
      url.pathname = '/admin-login';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
