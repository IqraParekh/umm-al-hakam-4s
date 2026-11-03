import { Analytics } from '@vercel/analytics/next'
import { Fredoka, Lora, Noto_Naskh_Arabic } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const lora = Lora({ subsets: ['latin'], variable: '--font-lora', display: 'swap' })
const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka', display: 'swap' })
const arabic = Noto_Naskh_Arabic({ subsets: ['arabic'], variable: '--font-arabic', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: 'Markaz Umm al-Hakam | Rooted in Revelation',
    template: '%s | Markaz Umm al-Hakam',
  },
  description: 'An Islamic educational institution grounded in the Qur’an, Sunnah and the understanding of the Sahabah رضي الله عنهم.',
  applicationName: 'Markaz Umm al-Hakam & Nabat Learning House',
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    title: 'Markaz Umm al-Hakam | Rooted in Revelation',
    description: 'Knowledge, understanding, practice and character across generations.',
    images: [{ url: '/images/umm-library.png', alt: 'A sunlit Islamic study library.' }],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F8F3E8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lora.variable} ${fredoka.variable} ${arabic.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
