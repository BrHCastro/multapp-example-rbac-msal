'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const registerUserPermission = async (permission: string) => {
  const cookie = await cookies()

  cookie.set('user_permission', permission, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })

  redirect('/br/pt/home')
}
