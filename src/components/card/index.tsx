import { Figma, Github, Link } from 'lucide-react'
import styles from './card.module.scss'

interface CardProps {
  type?: 'develop' | 'design'
  title: string
  description: string
  link?: string
  linkVisit?: string
}

export function Card({
  type = 'develop',
  title,
  description,
  link,
  linkVisit,
}: CardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          {type === 'develop' ? <Github /> : <Figma />}{' '}
          {type === 'develop' ? 'Github' : 'Figma'}
        </a>
      )}

      {linkVisit && (
        <a href={linkVisit} target="_blank" rel="noreferrer">
          <Link />
          Visitar
        </a>
      )}
    </div>
  )
}
