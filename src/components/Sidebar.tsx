import { PencilLine } from "phosphor-react"
import styles from "./Sidebar.module.css"
import { Avatar } from "./Avatar"

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://github.com/wellmota.png" />
        <strong>Wellington Mota</strong>
        <span>UI/UX Designer</span>
      </div>
      <footer>
        <a href="#">
          {" "}
          <PencilLine weight="fill" size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}

export default Sidebar
