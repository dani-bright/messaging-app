import Link from 'next/link'
import styles from "../styles/Home.module.css";


export const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link href="/">
          <a>Se connecter</a>
        </Link>
      </li>
      <li>
        <Link href="/register">
          <a>S'enregistrer</a>
        </Link>
      </li>
    </ul>
  )
};