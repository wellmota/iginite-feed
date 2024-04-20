import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="http://github.com/wellmota.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wellington Mota</strong>
              <time title="11 de maio às 09:13h" dateTime="2022-05-11 08:13:30">
                Certa de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>muito bom, parabéns</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment
