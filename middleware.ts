import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// In-memory store for rate limiting
// In a production environment, you would use Redis or another distributed cache
const ipRequestMap = new Map<string, { count: number; timestamp: number }>()

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds
const MAX_REQUESTS_PER_WINDOW = 100 // Maximum requests per window

export function middleware(request: NextRequest) {
  // Get the IP address from the request headers
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor ? forwardedFor.split(',')[0] : 'anonymous'
  
  // Skip rate limiting for static assets
  if (request.nextUrl.pathname.startsWith('/_next/') || 
      request.nextUrl.pathname.startsWith('/static/') ||
      request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js)$/)) {
    return NextResponse.next()
  }

  // Get current timestamp
  const now = Date.now()
  
  // Get existing rate limit data for this IP
  const rateLimitData = ipRequestMap.get(ip)
  
  // If this is a new IP or the window has expired, create a new entry
  if (!rateLimitData || now - rateLimitData.timestamp > RATE_LIMIT_WINDOW) {
    ipRequestMap.set(ip, { count: 1, timestamp: now })
    return NextResponse.next()
  }
  
  // If the IP has exceeded the rate limit
  if (rateLimitData.count >= MAX_REQUESTS_PER_WINDOW) {
    // Return a 429 Too Many Requests response
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': `${Math.ceil((rateLimitData.timestamp + RATE_LIMIT_WINDOW - now) / 1000)}`,
        'Content-Type': 'text/plain',
      },
    })
  }
  
  // Increment the request count
  rateLimitData.count++
  ipRequestMap.set(ip, rateLimitData)
  
  // Clean up old entries every 100 requests to prevent memory leaks
  if (Math.random() < 0.01) {
    const cutoff = now - RATE_LIMIT_WINDOW
    for (const [key, value] of ipRequestMap.entries()) {
      if (value.timestamp < cutoff) {
        ipRequestMap.delete(key)
      }
    }
  }
  
  return NextResponse.next()
}

// Only run the middleware on API routes and the main pages
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 