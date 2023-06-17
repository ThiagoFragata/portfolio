import { Card } from '@/src/components/card'
import styles from '@/src/styles/cases-and-solutions.module.scss'
import { Link } from 'lucide-react'

export default function CasesAndSolutions() {
  return (
    <main className={styles.container}>
      <div>
        <h1>Trabalho, Hobby & Open Source</h1>
        <p>
          Essa página lista os principais projetos que venho desenvolvendo
          durante a minha jornada como programador.
        </p>
      </div>

      <div className={styles.title}>
        <h2>Web & Mobile</h2>
      </div>

      <div className={styles.flex}>
        <Card size="large" />
        <Card size="large" />
        <Card size="large" />
      </div>

      <div className={styles.title}>
        <h2>UI Design</h2>
      </div>

      <div className={styles.flex}>
        <Card type="design" size="small" />
        <Card type="design" size="small" />
      </div>

      <div className={styles.title}>
        <h2>Todos meus projetos</h2>
      </div>

      <div className={styles.projects}>
        <h3>2023</h3>
        <ul className={styles.list}>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>Projeto 1:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </a>
          </li>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>Projeto 1:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </a>
          </li>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>Projeto 1:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </a>
          </li>
        </ul>

        <h3>2022</h3>
        <ul className={styles.list}>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>Projeto 1:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </a>
          </li>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>Projeto 1:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </a>
          </li>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>Projeto 1:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}
