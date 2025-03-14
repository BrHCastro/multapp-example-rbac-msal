import { stackMiddlewares } from '@/middlewares/stack'
import { withPermissions } from '@/middlewares/withPermissions'

const middlewares = [withPermissions]

export default stackMiddlewares(middlewares)

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
