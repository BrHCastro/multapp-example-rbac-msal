import { NextResponse, type NextRequest } from 'next/server'
import type { MiddlewareFactory } from './types'

type UserPermissions = 'Internal' | 'External'

const getUserPermission = (request: NextRequest) => {
  const userPermission = request.cookies.get('user_permission')?.value as
    | UserPermissions
    | undefined
  return userPermission
}

export const withPermissions: MiddlewareFactory = () => {
  return async (request: NextRequest) => {
    const url = request.nextUrl.clone()
    const userPermission = getUserPermission(request)

    const [currency, locale, ...path] = url.pathname.split('/').filter(Boolean)

    if (!currency || !locale) {
      return NextResponse.next()
    }

    if (userPermission) {
      if (url.pathname === '/') {
        url.pathname = `/${currency}/${locale}/${userPermission.toLowerCase()}/home`
      } else {
        url.pathname = `/${currency}/${locale}/${userPermission.toLowerCase()}/${path}`
      }
    } else {
      url.pathname = '/'
    }

    return NextResponse.rewrite(url)
  }
}
