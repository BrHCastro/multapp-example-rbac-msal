import { Separator } from '@/presentation/components/ui/separator'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'

export const metadata = {
  title: 'External app',
  description: 'This is an external app',
}

export default function ExternalLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex items-center justify-between border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold">External app</h1>

        <div className="flex gap-4">
          <Link className="hover:text-slate-300" href="/br/pt/home">
            Home
          </Link>
          <Link className="hover:text-slate-300" href="/br/pt/setup">
            Setup
          </Link>
          <Separator
            style={{ height: 25 }}
            className="bg-slate-600"
            orientation="vertical"
          />
          <Link
            className="text-blue-400 hover:text-blue-300"
            href="/api/logout"
          >
            Logout
          </Link>
        </div>
      </header>

      <div className="flex flex-auto">{children}</div>
    </div>
  )
}
