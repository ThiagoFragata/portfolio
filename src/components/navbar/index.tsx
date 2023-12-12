'use client'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import styles from './navbar.module.scss'

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
          <Link
            href={`https://wa.me/5592993788359?text=Oi!`}
            target="_blank"
            className={styles.blog}
          >
            Contato
          </Link>
        </li>
      </ul>
    </div>
  )
}
