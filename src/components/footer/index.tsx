import { Code2 } from 'lucide-react'

import styles from './footer.module.scss'

export function Footer() {
  return (
    <div className={styles.container}>
      <Code2 />
      <p>Stack for stacks</p>
      <small>ReactJS + NextJS + TypeScript & Sass</small>
    </div>
  )
}
