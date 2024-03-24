import Image from 'next/image'

import { ProfileImg } from '@/assets/images'
import { Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <main className='max-w-screen-xl mx-auto mb-8'>
      <div className='my-16 mt-4'>
        <h1 className="font-bold text-7xl">Um pouco sobre mim</h1>
      </div>

      <div className='flex items-start gap-8'>
        <Image
          src={ProfileImg}
          width={400}
          alt="Foto de perfil"
          className='box-border border rounded-md'
        />

        <div>
          <div>
            <h2 className='mb-8 text-xl font-semibold'>Bio</h2>
          </div>          <div>
            <p className='mb-4'>
              Meu nome é Thiago Henrique, mais conhecido como <strong>Fragata ✌️</strong> e tenho 24 anos.
            </p>

            <p className='mb-8'>
              Sou <strong>Engenheiro de Software</strong>, atuo como desenvolvedor fullstack web/mobile e UI Designer. Minhas stacks favoritas são <strong>NextsJS, React Native e NestJS</strong>. Meu foco é no desenvolvimento frontend, atualmente atuo em freelas onde executo o desenvolvimento do frontend e backend das aplicações. Possuo grande conhecimento em desenvolvimento web, entregando soluções ágeis com resultados assertivos nos projetos.
            </p>
          </div>

          <div>
            <h2 className='mb-8 text-xl font-semibold'>Experiências</h2>
          </div>

          <ul className='flex flex-col gap-4'>
            <Link href='https://super.ufam.edu.br/sobre/' target='_blank' className='flex items-center gap-2'>
              <LinkIcon size={16} /> <strong>SUPER</strong> • Itacoatiara, AM • 12
              meses
            </Link>
            <Link href='https://clicksoft.com.br/' target='_blank' className='flex items-center gap-2'>
              <LinkIcon size={16} /> <strong>ClickSoft</strong> Rio de Janeiro, RJ • 10 meses
            </Link>
            <li className='flex items-center gap-2'>
              <strong>Onvider</strong> Andradina, MS • 2 anos
            </li>
            <li className='flex items-center gap-2'>
              <strong>Smart GAIT</strong> • Manaus, AM • 8
              meses
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
