import styles from '@/src/styles/home.module.scss'
import { MessagesSquare } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  const site = 'https://tucandev.com.br/'
  const phoneNumber = '5592986080837' // Substitua pelo número desejado

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

        <Link
          className={styles.whatsapp}
          target="_blank"
          href={`https://wa.me/${phoneNumber}?text=Olá,%20tenho%20interesse%20em%20fazer%20um%20projeto!`}
        >
          <MessagesSquare color="#2c9f5a" className={styles.icon} />
          Vamos conversar?
        </Link>
      </div>
    </main>
  )
}
