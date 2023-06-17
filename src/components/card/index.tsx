import { Figma, Github } from 'lucide-react'
import styles from './card.module.scss'

interface CardProps {
  type?: 'develop' | 'design'
}

export function Card({ type = 'develop' }: CardProps) {
  return (
    <div className={styles.card}>
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
