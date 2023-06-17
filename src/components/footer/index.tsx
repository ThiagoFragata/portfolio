import styles from './footer.module.scss'

export function Footer() {
  return (
    <ul className={styles.list}>
      <li>
        <a href="#">Behance</a>
      </li>
      <li>
        <a href="#">Instagram</a>
      </li>
      <li>
        <a href="#">LinkedIn</a>
      </li>
      <li>
        <a href="#">WhatsApp</a>
      </li>
    </ul>
  )
}
