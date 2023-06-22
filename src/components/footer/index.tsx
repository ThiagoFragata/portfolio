import styles from './footer.module.scss'

export function Footer() {
  return (
    <ul className={styles.list}>
      <li>
        <a
          target="_blank"
          href="https://www.behance.net/thiagohenrique49"
          rel="noreferrer"
        >
          Behance
        </a>
      </li>
      <li>
        <a target="_blank" href="figma.com/@thiagohenriquef" rel="noreferrer">
          Figma
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.instagram.com/_thiagofragata/"
          rel="noreferrer"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/thiagohenriquefragata/"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  )
}
