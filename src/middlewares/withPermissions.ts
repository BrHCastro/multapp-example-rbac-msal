import { NextResponse, type NextRequest } from 'next/server'
import type { MiddlewareFactory } from './types'

type UserPermissions = 'Internal' | 'External'

const getUserPermission = (request: NextRequest) => {
  const userPermission = request.cookies.get('user_permission')?.value as
    | UserPermissions
    | undefined
  return userPermission
}

export const STATIC_RESOURCE_REGEX =
  /\.(png|jpg|jpeg|webp|gif|svg|css|js|ico|woff|woff2|ttf|otf)$/i

export const withPermissions: MiddlewareFactory = () => {
  return async (request: NextRequest) => {
    const url = request.nextUrl.clone()
    const userPermission = getUserPermission(request)
    const isStaticResource = STATIC_RESOURCE_REGEX.test(url.pathname)

    const [currency = 'br', locale = 'pt', ...path] = url.pathname
      .split('/')
      .filter(Boolean)

    const langPrefix = `/${currency}/${locale}`

    if (userPermission) {
      if (url.pathname === '/') {
        url.pathname = `${langPrefix}/${userPermission.toLowerCase()}/home`
      } else {
        url.pathname = `${langPrefix}/${userPermission.toLowerCase()}/${path}`
      }
    } else {
      if (!isStaticResource && !url.pathname.startsWith(`${langPrefix}`)) {
        const absoluteUrl = `${url.origin}${langPrefix}/login`
        return NextResponse.redirect(absoluteUrl)
      }
    }

    return NextResponse.rewrite(url)
  }
}
