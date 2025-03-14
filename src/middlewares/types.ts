import { type NextResponse, type NextMiddleware } from 'next/server'

export type MiddlewareFactory = (
  middleware: NextMiddleware,
  response: NextResponse,
) => NextMiddleware
