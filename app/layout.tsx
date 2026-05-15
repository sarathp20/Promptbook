// app/layout.tsx
import type { Metadata } from 'next'
import { Inter }          from 'next/font/google'
import './globals.css'
import SessionWrapper     from './components/SessionWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:       'PromptFlow',
  description: 'Build reusable AI prompt workflows',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  )
}