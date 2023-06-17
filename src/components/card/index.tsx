import { Figma, Github } from 'lucide-react'
import styles from './card.module.scss'

interface CardProps {
  type?: 'develop' | 'design'
  size: 'large' | 'small'
}

export function Card({ type = 'develop', size }: CardProps) {
  return (
    <div
      className={styles.card}
      style={{ maxWidth: `${size === 'large' ? '448px' : '688px'}` }}
    >
      <h3>Title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod deserunt
        blanditiis magni qui nostrum tempore, nulla laudantium natus cum
        suscipit praesentium, eos est perspiciatis eaque enim sint minus
        voluptatum!
      </p>
      {type === 'develop' ? (
        <a href="#">
          <Github /> Github
        </a>
      ) : (
        <a href="#">
          <Figma /> Figma
        </a>
      )}
    </div>
  )
}
