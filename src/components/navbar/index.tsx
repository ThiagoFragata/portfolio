'use client'
import Link from 'next/link'
import styles from './navbar.module.scss'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()
  const { back } = useRouter()
  return (
    <div className={styles.container}>
      {pathname !== '/' && (
        <button className={styles.back} onClick={() => back()}>
          <ChevronLeft /> Voltar
        </button>
      )}
      <ul className={styles.list}>
        <li
          className={`
          ${styles.linkHover} 
          ${pathname === '/' && styles.currentPage}
          ${pathname === '/' && styles.init}`}
        >
          <Link href="/">Inicio</Link>
        </li>
        <li
          className={`
        ${styles.linkHover} 
        ${pathname === '/cases-and-solutions' && styles.currentPage}`}
        >
          <Link href="/cases-and-solutions">Cases e soluções</Link>
        </li>
        <li
          className={`
        ${styles.linkHover} 
        ${pathname === '/about' && styles.currentPage}`}
        >
          <Link href="about">Sobre</Link>
        </li>
        <li>
          <button disabled className={styles.blog}>
            Blog
          </button>
        </li>
      </ul>
    </div>
  )
}
