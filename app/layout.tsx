import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'ChemSure — Field Test Verification System', description: 'Professional field-test capture, colour calibration, analysis and tamper-evident record generation.', generator: 'ChemSure' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f7f9f6', userScalable: false }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-[#f7f9f6]"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
