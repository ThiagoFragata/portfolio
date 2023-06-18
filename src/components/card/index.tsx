import { Figma, Github } from 'lucide-react'
import styles from './card.module.scss'

interface CardProps {
  type?: 'develop' | 'design'
  title: string
  description: string
  link: string
}

export function Card({
  type = 'develop',
  title,
  description,
  link,
}: CardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        {type === 'develop' ? <Github /> : <Figma />}{' '}
        {type === 'develop' ? 'Github' : 'Figma'}
      </a>
    </div>
  )
}
