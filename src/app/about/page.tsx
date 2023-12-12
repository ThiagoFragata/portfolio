import styles from '@/src/styles/about.module.scss'
import { Link } from 'lucide-react'
import Image from 'next/image'

import Profile from '@/src/assets/images/profile.png'

export default function CasesAndSolutions() {
  return (
    <main className={styles.container}>
      <div>
        <h1>Um pouco sobre mim</h1>
      </div>

      <div className={styles.flex}>
        <Image
          className={styles.image}
          src={Profile}
          height={400}
          alt="Photo of profile"
        />

        <div className={styles.bio}>
          <p>
            Meu nome é Thiago Henrique, mais conhecido como{' '}
            <strong>Fragata</strong>, tenho 24 anos.
          </p>
          <p>
            Sou <strong>Engenheiro de Software</strong>, atuo como desenvolvedor{' '}
            <strong>Fullstack</strong> especializado na criação de interfaces
            modernas e responsivas, com ênfase em performance e otimização.
            Minha experiência abrange todo ciclo de desenvolvimento web e
            mobile, proporcionando soluções rápidas e eficazes. Apaixonado por
            superar desafios, estou constantemente em busca de oportunidades
            para aplicar minha criatividade e habilidades, buscando sempre novas
            experiências.
          </p>

          <h4>Bio</h4>

          <p>
            | Me chamo Thiago, mas pode me chamar de <strong>Fragata</strong> ✌️
          </p>

          <p></p>
        </div>
      </div>

      <div className={styles.title}>
        <h2>Experiência</h2>
      </div>

      <div className={styles.projects}>
        <ul className={styles.list}>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>SUPER</strong> • Itacoatiara, AM - abr 2023 - momento • 3
              meses
            </a>
          </li>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>Clicksoft</strong> Rio de Janeiro, RJ - out 2022 - set
              2023 • 10 meses
            </a>
          </li>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>Onvider</strong> Andradina, MS - nov 2021 - out 2022 • 1 e
              8 meses
            </a>
          </li>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>Smart gait</strong> • Manaus, AM - nov 2021 - mar 2022 • 8
              meses
            </a>
          </li>
          <li>
            <a href="#">
              <Link className={styles.icon} size={16} />
              <strong>TucanDev</strong> • Itacoatiara, AM - fev 2021 - out 2023
              • +2 anos
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}
