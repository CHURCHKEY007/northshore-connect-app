import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Database } from '@/lib/supabase/schema';

// TEMPORARY: Auth checks are bypassed for development mode
// const protectedRoutes = [
//   '/admin',
//   '/profile',
//   '/my-business',
//   '/dashboard',
// ];

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // TEMPORARY: Bypassing auth checks for development mode
  // Return the response immediately without auth checks
  return response;
  
  // DISABLED FOR DEV MODE: Auth check code below
  /*
  // Create a Supabase client for authentication
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: any) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  // Refresh the session
  const { data: { session } } = await supabase.auth.getSession();

  // Check if the route is protected and the user is not authenticated
  const url = new URL(request.url);
  const isProtectedRoute = protectedRoutes.some(route => url.pathname.startsWith(route));

  if (isProtectedRoute && !session) {
    // Redirect to login page
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirectedFrom', url.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Check admin routes
  if (url.pathname.startsWith('/admin')) {
    const { data: { user } } = await supabase.auth.getUser();
    
    // You may need to check a specific role or user metadata here
    // For example:
    // if (!user?.app_metadata?.role || user.app_metadata.role !== 'admin') {
    //   return NextResponse.redirect(new URL('/unauthorized', request.url));
    // }
  }
  */

  return response;
}

// Only run middleware on specific routes
export const config = {
  matcher: [
    // Auth routes
    '/login',
    '/signup',
    '/reset-password',
    // Protected routes
    '/admin/:path*',
    '/profile/:path*',
    '/my-business/:path*',
    '/dashboard/:path*',
  ],
};