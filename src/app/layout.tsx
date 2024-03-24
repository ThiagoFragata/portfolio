import '@/styles/globals.css'

import { ReactNode } from 'react'

import Providers from '@/app/providers'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'], style: 'normal', variable: '--sans-serif' })

export const metadata = {
  title: 'Portfolio | Thiago Fragata',
  description:
    'Site portfolio de projetos últimos projetos e projetos em execução',
}

export default function LayoutHome({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className} min-h-screen flex flex-col justify-between`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
