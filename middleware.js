import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const isAuth = !!req.nextauth.token;
    const isAuthPage = req.nextUrl.pathname.startsWith('/login');

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/', req.url));
      }
      return NextResponse.next();
    }

    if (!isAuth) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. /images (inside /public)
     * 6. All files inside /public (favicon.ico, robots.txt, etc.)
     */
    '/((?!api|_next|_static|_vercel|images|[\\w-]+\\.\\w+).*)',
  ],
};
