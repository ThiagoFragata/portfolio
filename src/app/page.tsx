import styles from '@/src/styles/home.module.scss'
import { Send } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className={styles.container}>
      <div>
        <h2>👋 Olá, seja-vindo, esse é o meu portifolio!</h2>
        <h1>Thiago Henrique Fragata</h1>
        <p>Engenheiro de Software | Dev Fullstack | UI Design</p>

        <Link
          className={styles.whatsapp}
          target="_blank"
          href={`https://wa.me/5592993788359?text=Oi!`}
        >
          <Send color="#2c9f5a" className={styles.icon} />
          Vamos conversar?
        </Link>
      </div>
    </main>
  )
}
