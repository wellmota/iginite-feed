import { Avatar } from "./Avatar"
import Comment from "./Comment"
import styles from "./Post.module.css"
import React from "react"
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

const Post = ({ author, content, publishedAt }) => {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>UX/UI Designer</span>
          </div>
        </div>
        <time title="" dateTime="2022-05-11 08:13:30">
          {publishedDateFormatted}
        </time>
      </header>
      <div className={styles.content}>
        <p>conteudo</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

export default Post
