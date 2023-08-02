import { ReactNode } from 'react'
import type { Metadata } from 'next'
import "bootstrap/dist/css/bootstrap.min.css"

export const metadata: Metadata = {
  title: 'ToDo',
  description: 'ToDo app with Next.js v13',
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
