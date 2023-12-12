import { Card } from '@/src/components/card'
import styles from '@/src/styles/cases-and-solutions.module.scss'
import { Github } from 'lucide-react'

export default function CasesAndSolutions() {
  return (
    <main className={styles.container}>
      <div>
        <h1>Trabalho & Hobbies</h1>

        <p>
          Essa página lista os principais projetos que venho desenvolvendo
          durante a minha jornada.
        </p>

        <strong>
          Importante ressaltar que alguns projetos podem ser privados e não
          terem links para visita-los ou repositórios públicos.
        </strong>
      </div>

      <div className={styles.title}>
        <h2>Programação</h2>
      </div>

      <div className={styles.grid3}>
        <Card
          title="e-Vacinas"
          description="Sistema para gerenciamento de vacinas para Unidades Básicas de Saúde"
        />

        <Card
          title="Parintins Show Fogos"
          description="Lading page para uma loja de fogos de artifícios e prestadora de shows pirotécnicos"
          linkVisit="https://parintinsshowfogos.com.br"
        />

        <Card
          title="Dra. Elizângela Jesus"
          description="Lading page de venda de ingresso para evento. Utilizando stripe para pagamento e redirecionamento inteligente de links para whatsApp"
          linkVisit="https://draelizangelajesus.com/pre-igefire"
        />

        <Card
          title="Arruma Fácil"
          description="Plataforma de prestação de serviços, faz a conexão entre o prestador e o cliente, projeto fullstack web e mobile."
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
          title="Pede mais"
          description="Sistema de cardápio online para lanchonetes, pizzarias e restaurantes em geral"
          link="https://www.figma.com/proto/FBUGwPSF1DnxbQGE1qmqtF/Pede-mais?type=design&node-id=1-2&t=9ztJfaAkp7aUFis8-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design"
          type="design"
        />

        <Card
          title="Urukut"
          description="O projeto Urukut é um aplicativo de diário de escolhar para educadores"
          link="https://www.figma.com/proto/Ipk6324nc67kGw30kJsWgG/Urukut---APP?page-id=1%3A2&type=design&node-id=1-2938&viewport=381%2C396%2C0.36&scaling=scale-down"
          type="design"
        />

        <Card
          title="Arruma Fácil"
          description="Plataforma para de contratação de profissionais do lar"
          link="https://www.figma.com/file/epImBLp8hTqZc4tgqwUFsN/ArrumaF%C3%A1cil?type=design&node-id=59%3A4501&mode=design&t=ihOBuLS7ZNBp6F8m-1"
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
        <h2>Acompanhe meus projetos</h2>
      </div>

      <div className={styles.projects}>
        <a
          href="https://github.com/ThiagoFragata"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
          Github
        </a>
      </div>
    </main>
  )
}
