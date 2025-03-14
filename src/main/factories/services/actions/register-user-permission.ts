'use server'

import { cookies } from 'next/headers'

export const registerUserPermission = async (permission: string) => {
  const cookie = await cookies()

  cookie.set('user_permission', permission, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })
}
