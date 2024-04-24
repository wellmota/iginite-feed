import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

const Comment = ({ content, onDeleteComment }) => {
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  const [likes, setNewLikes] = useState(0)

  function handleLikes() {
    setNewLikes((prevLikes) => prevLikes + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/wellmota.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wellington Mota</strong>
              <time title="11 de maio às 09:13h" dateTime="2022-05-11 08:13:30">
                Certa de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikes}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment
