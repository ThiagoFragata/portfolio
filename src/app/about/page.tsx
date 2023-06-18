import styles from '@/src/styles/about.module.scss'
import { Link } from 'lucide-react'
import Image from 'next/image'

import Desk from '@/src/assets/images/desk.jpg'

export default function CasesAndSolutions() {
  return (
    <main className={styles.container}>
      <div>
        <h1>Um pouco sobre mim</h1>
      </div>

      <div className={styles.flex}>
        <Image
          className={styles.image}
          src={Desk}
          width={600}
          height={800}
          alt="Picture of Desk development"
        />

        <div className={styles.bio}>
          <p>
            Meu nome é Thiago Henrique, mais conhecido como{' '}
            <strong>Fragata</strong>, tenho 23 anos.
          </p>
          <p>
            Sou engenheiro de software, apaixonado por tecnologia. Atualmente
            sou <strong>desenvolvedor front-end</strong> pleno e tenho 3 anos de
            experiência com essas tecnologias: HTML, CSS, JavaScript,
            TypeScript, React, React-Native, NextJS e Expo.
          </p>
          <p>
            Quando não estou trabalhando, estou desenvolvendo algum pessoal ou
            produzindo conteúdos para as redes: <strong>Instagram</strong> e{' '}
            <strong>LinkedIn</strong>.
          </p>

          <h4>Bio</h4>

          <p>
            | Me chamo Thiago, mas pode me chamar de <strong>Fragata</strong> ✌️
          </p>

          <p></p>
        </div>
      </div>

      <div className={styles.title}>
        <h2>Carreira</h2>
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
              <strong>Clicksoft</strong> Rio de Janeiro, RJ - out 2022 - momento
              • 9 meses
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
        </ul>
      </div>
    </main>
  )
}
