import { parse } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const cookie = req.headers.get('cookie');
  
  if (cookie) {
    const cookies = parse(cookie);
    const userSession = cookies['user-session'];

    console.log('User session:', userSession); // Debugging line

    if (userSession) {
      const sessionData = JSON.parse(userSession);
      
      // Periksa apakah role adalah admin
      if (sessionData.role === 'admin') {
        return NextResponse.next();
      }
    }
  }

  // Redirect ke halaman login jika tidak terautentikasi atau bukan admin
  return NextResponse.redirect(new URL('/login', req.url));
}

