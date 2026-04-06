import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HorecaNext â€” Jouw volgende stap in de horeca',
  description: 'Wij verbinden talent met sterke horecazaken in regio Zutphen & Gelderland. Snel, persoonlijk en zonder gedoe.',
  keywords: 'horeca, vacatures, Zutphen, Gelderland, recruitment, kok, bediening, horecapersoneel',
  openGraph: {
    title: 'HorecaNext â€” Jouw volgende stap in de horeca',
    description: 'Wij verbinden talent met sterke horecazaken in regio Zutphen & Gelderland.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="grain">{children}</body>
    </html>
  )
}
