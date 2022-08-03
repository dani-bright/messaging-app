import Link from 'next/link'
import styles from "../styles/Home.module.css";


export const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/inbox">
          <a>panier</a>
        </Link>
      </li>
    </ul>
  )
};