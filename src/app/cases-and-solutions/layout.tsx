import '@/src/styles/globals.scss'

import { ReactNode } from 'react'
import { Raleway } from 'next/font/google'
import { Navbar } from '@/src/components/navbar'
import { Footer } from '@/src/components/footer'

const font = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Cases e Soluções | Thiago Fragata',
  description:
    'Portifolio do engenheiro de software e ui design Thiago Henrique Fragata',
}

export default function Layout({ children }: { children: ReactNode }) {
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
