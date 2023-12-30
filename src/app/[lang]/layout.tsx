import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { Locale, defaultLocale } from '../../../i18n.config'
import { ClerkProvider } from '@clerk/nextjs'
import { arSA, frFR, enUS } from '@clerk/localizations'
import { Analytics } from '@vercel/analytics/react'
export const metadata: Metadata = {
  title: {
    template: '%s - Riyada',
    default: 'Riyada - Construction made simple for regular people',
  },
  description:
    'Most construction services are accurate but lack flexibility. We make the opposite trade-off, from Design to Completion, we’ve got you covered.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <ClerkProvider
      localization={
        params.lang === 'en' ? enUS : params.lang === 'fr' ? frFR : arSA
      }
    >
      <html
        lang={params.lang ?? defaultLocale}
        className={clsx(
          'h-full scroll-smooth bg-white antialiased',
          inter.variable,
          lexend.variable,
        )}
      >
        <body className="flex h-full flex-col" suppressHydrationWarning={true}>
          {children}
          <Analytics />
          <Toaster position="top-right" />
        </body>
      </html>
    </ClerkProvider>
  )
}
