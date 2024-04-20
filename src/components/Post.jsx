import styles from "./Post.module.css"
import React from "react"

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="http://github.com/wellmota.png" />
          <div className={styles.authorInfo}>
            <strong>Wellington Mota</strong>
            <span>UX/UI Designer</span>
          </div>
        </div>
        <time title="11 de maio às 09:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1hs
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀
        <p>
          {" "}
          <a href="#">jane.design/doctorcare </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}

export default Post
