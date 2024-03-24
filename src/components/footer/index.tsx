'use client'
import { Send } from 'lucide-react';
import Link from 'next/link';


export function Footer() {


  return (
    <div className="w-full max-w-screen-xl px-8 py-4 mx-auto mb-8 border rounded-lg">
      <h1 className="text-lg font-medium">Vamos construir algo juntos?</h1>
      <p className="text-base font-light">Se você tem algum projeto em mente, sinta-se à vontade para me enviar uma mensagem.</p>

      <Link
        className='mt-4 button-link'
        href={`https://wa.me/5592993788359?text=Oi!`}
        target="_blank"
      >
        <Send />
        Fale Comigo
      </Link>
    </div>
  )
}
