import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

//import { ACCESS_PASSWORD, COOKIES_ACCESS_PASSWORD } from '@/env-constants';

export function middleware(request: NextRequest) {
  // const accessPassword = request.cookies.get(COOKIES_ACCESS_PASSWORD)?.value;
  //
  // if (![ACCESS_PASSWORD].includes(accessPassword)) {
  //   return NextResponse.rewrite(new URL('/password', request.url));
  // }

  console.log(`${request.method || ''} ${request.url}`);

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
