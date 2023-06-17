import { MessagesSquare } from 'lucide-react'
import styles from '@/src/styles/home.module.scss'

export default function Page() {
  const site = 'https://tucandev.com.br/'

  return (
    <main className={styles.container}>
      <div>
        <h2>👋 Olá, seja-vindo, esse é o meu portifolio!</h2>
        <h1>Thiago Fragata</h1>
        <p>
          Engenheiro de Software | UI Design | Fundador da
          <a target="_blank" href={site} rel="noreferrer">
            tucandev
          </a>
        </p>
        <button className={styles.whatsapp}>
          <MessagesSquare color="#2c9f5a" className={styles.icon} />
          Vamos conversar?
        </button>
      </div>
    </main>
  )
}
