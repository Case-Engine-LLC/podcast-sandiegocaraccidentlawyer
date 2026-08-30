import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { MarkerWidget } from '@/components/MarkerWidget'
import { GoogleTagManager } from '@/components/GoogleTagManager'
import SchemaJsonLd from '@/components/SchemaJsonLd'
import { siteConfig, about } from '@/data/siteData'
import './globals.css'
import '@/themes/v1/variables.css'
import { AgentTools } from '@/components/AgentTools'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

const SITE_URL = siteConfig.podcastUrl || 'https://www.personalinjurylawuncovered.attorney'

// Meta/SEO title — same as the canonical podcast name.
const META_TITLE = siteConfig.podcastName

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: META_TITLE,
    template: `%s | ${META_TITLE}`,
  },
  description: about.description,
  applicationName: META_TITLE,
  authors: [{ name: 'Liam Perry', url: 'https://perrypi.com' }],
  keywords: [
    'Liam Perry',
    'Perry Personal Injury Lawyers',
    'Perry PI',
    'San Diego accident attorney',
    'San Diego car accident lawyer',
    'California personal injury podcast',
    'San Diego truck accident lawyer',
    'San Diego motorcycle accident lawyer',
    'rideshare accident attorney California',
    'wrongful death attorney California',
    'pure comparative negligence',
    'SR-1 California',
  ],
  category: 'Legal Podcast',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: META_TITLE,
    title: META_TITLE,
    description: about.description,
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${META_TITLE} — hosted by Liam Perry of Perry Personal Injury Lawyers`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: about.description,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: '/icon', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#02073B' },
    { media: '(prefers-color-scheme: dark)', color: '#02073B' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <MarkerWidget />
        <GoogleTagManager />
        <AgentTools />
      </body>
    </html>
  )
}
