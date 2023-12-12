import '@/src/styles/globals.scss'

import { Footer } from '@/src/components/footer'
import { Navbar } from '@/src/components/navbar'
import { Raleway } from 'next/font/google'
import { ReactNode } from 'react'

const font = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Thiago Fragata',
  description:
    'Site portfolio de projetos últimos projetos e projetos em execução',
}

export default function LayoutHome({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
