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

      <div className={styles.grid3}>
        <Card
          title="Ig.news"
          description="O projeto Ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura."
          link="https://github.com/ThiagoFragata/Chapter3-Ig-news.git"
        />
        <Card
          title="WorldTrip"
          description="O projeto WorldTrip é um landpage de aviação onde os usuários podem ter acesso ao conteúdo sobre viagens."
          link="https://github.com/ThiagoFragata/Desafio6-ignite-WorldTrip.git"
        />
        <Card
          title="Vou de moto"
          description="O projeto Vou de moto é aplicativo de tranporte urbano para mototaxista e passageiros"
          link="https://github.com/ThiagoFragata/app-voudemoto.git"
        />
      </div>

      <div className={styles.title}>
        <h2>UI Design</h2>
      </div>

      <div className={styles.grid2}>
        <Card
          title="Urukut"
          description="O projeto Urukut é um aplicativo de diário de escolhar para educadores"
          link="https://www.figma.com/proto/Ipk6324nc67kGw30kJsWgG/Urukut---APP?page-id=1%3A2&type=design&node-id=1-2938&viewport=381%2C396%2C0.36&scaling=scale-down"
          type="design"
        />
        <Card
          title="Guaraná Finanças"
          description="O projeto Guaraná Finanças é um plicativo gestão financeira para produdores de guaraná da região amazônica"
          link="https://www.figma.com/proto/qeKVFDNzySLHGnaATHcZEH/Campus-Mobile?page-id=1%3A3&type=design&node-id=13-65&viewport=809%2C171%2C0.18&scaling=min-zoom"
          type="design"
        />
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
