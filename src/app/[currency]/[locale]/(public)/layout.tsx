import { PublicLayout as Layout } from '@/presentation/components/layouts/public'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Public Layout',
  description: 'Generated by create next app',
}

export default function PublicLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return <Layout>{children}</Layout>
}
