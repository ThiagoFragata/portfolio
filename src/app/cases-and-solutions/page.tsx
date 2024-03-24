import { ItemPortfolio } from "@/components/ItemPortfolio";

const portfolio = [
  {
    title: 'Smart Medical Cabinet',
    description: 'Aplicativos revolucionários para médicos e pacientes, impulsionados pela inteligência artificial, para garantir aderência medicamentosa. Deixe a IA cuidar das notificações enquanto você cuida da saúde!',
    url: "url('/images/smart-medical-cabinet-app.png')",
    tags: ["React Native", "Expo", "Firebase", "Figma"],
  },
  {
    title: 'e-Farma',
    description: 'Uma plataforma robusta para gerenciar vendas e estoque em farmácias. A solução completa para simplificar seu negócio e otimizar suas operações!',
    url: "url('/images/e-farma.png')",
    tags: ["NextJS", "Firebase", "Figma"],
  },
  {
    title: 'Smart Irrigation',
    description: 'O futuro da agricultura está aqui! Um aplicativo inteligente desenvolvido para o projeto SUPER, equipado com sensores avançados para monitorar suas plantações e controlar a irrigação com precisão.',
    url: "url('/images/smart-irrigation.png')",
    tags: ["React Native", "Expo", "Firebase", "Figma"],
  },
  {
    title: 'SysCOP',
    description: 'Um sistema confiável para o registro de ocorrências, projetado especialmente para os agentes de portaria da Universidade Federal do Amazonas. Mantenha sua comunidade segura com o SysCOP!',
    url: "url('/images/sysCOP.png')",
    tags: ["NextJS", "NestJS", "Postgres", "Figma"],
  },
  {
    title: 'Parintins Show Dashboard',
    description: 'Controle completo de vendas e estoque para lojas de fogos de artifício. Transforme seu negócio em um espetáculo com o Sistema Parintins Show Fogos!',
    url: "url('/images/pinfogos-sistema.png')",
    tags: ["NextJS", "MongoDB", "Figma"],
  },
  {
    title: 'Império Verde Dashboard',
    description: 'Uma interface cativante desenvolvida para o controle do mercado de hortaliças. Domine o universo verde com o Império Verde!',
    url: "url('/images/horti-fruit.png')",
    tags: ["Figma"],
  },
  {
    title: 'Pede+',
    description: 'Dê vida ao seu restaurante com o cardápio online mais dinâmico e interativo do mercado. O Pede+ é a solução que seus clientes estavam esperando!',
    url: "url('/images/pede-plus.png')",
    tags: ["NextJS", "Figma"],
  },
  {
    title: 'Arruma Fácil',
    description: 'Conecte-se com os melhores profissionais para tornar sua casa um lar perfeito. Arrume sua vida com o Arruma Fácil!',
    url: "url('/images/arruma-facil.png')",
    tags: ["React Native", "NestJS", "Postgres", "Figma"],
  },
  {
    title: 'Warana Finances',
    description: 'Domine o mercado de guaraná com uma plataforma de última geração para monitoramento, controle e vendas. Warana Finances - porque cada gota conta!',
    url: "url('/images/guarana-finances.png')",
    tags: ["React Native", "NestJS", "MySQL", "Figma"],
  },
]

export default function CasesAndSolutions() {
  return (
    <div className='flex-1 w-full max-w-screen-xl px-8 mx-auto'>
      <div className='my-16 mt-4'>
        <h1 className="font-bold text-7xl">Projetos</h1>
        <p className="max-w-xl mt-2 font-light">
          Quando o design e o código se unem, é como se o Picasso e o Einstein se encontrassem em uma festa e decidissem criar algo incrível juntos.
        </p>
      </div>
      {portfolio.map((item) => (

        <ItemPortfolio
          key={Math.random()}
          title={item.title}
          description={item.description}
          url={item.url}
          tags={item.tags}
        />
      ))}
    </div>
  )
}
