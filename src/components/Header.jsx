import IgniteLogo from "../assets/IgniteLogo"
import styles from "./Header.module.css"
export function Header() {
  return (
    <header className={styles.header}>
      <IgniteLogo className="main-logo" />
      <h2>Ignite Feed</h2>
    </header>
  )
}
