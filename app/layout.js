import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from '@/folders/components/ResuableComp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'memories-sweet dream',
  description: "Explore cherished memories on our website - a curated collection of moments that matter most. From heartwarming events to unforgettable milestones, discover a nostalgic journey through 50 impactful words. Relive joy, laughter, and significance as you navigate our carefully crafted memories, each holding a story worth exploring.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  )
}
