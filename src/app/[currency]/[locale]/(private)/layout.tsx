import { PrivateLayout as Layout } from '@/presentation/components/layouts/private'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Private Layout',
  description: 'Generated by create next app',
}

export default function PrivateLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return <Layout>{children}</Layout>
}
