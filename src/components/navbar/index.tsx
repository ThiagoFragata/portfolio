'use client'
import { ToggleButtonTheme } from '@/components/toggleButtonTheme'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import { usePathname, useRouter } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()
  const { back } = useRouter()

  return (
    <div className='flex items-center justify-between px-16 py-4'>
      <div className='flex items-center gap-8'>
        {pathname !== '/' &&
          <button disabled={pathname === '/'} onClick={() => back()} className='flex items-center justify-center gap-2 border'>
            <ChevronLeft />
          </button>
        }

        <ul className='flex items-center gap-4'>
          <li>
            <Link href="/">Inicio</Link>
          </li>

          {/* <li>
            <Link  href="/cases-and-solutions">Cases e soluções</Link>
          </li> */}

          <li>
            <Link href="about">Sobre</Link>
          </li>
        </ul>
      </div>

      <ToggleButtonTheme />

    </div>
  )
}
