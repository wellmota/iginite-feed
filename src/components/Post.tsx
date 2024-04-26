import { Avatar } from "./Avatar"
import Comment from "./Comment"
import styles from "./Post.module.css"
import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react"
import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export interface PostType {
  author: {
    name: string
    role: string
    avatarUrl: string
  }
  publishedAt: Date
  content: Content[]
  id: number
}

interface PostProps {
  post: PostType
}

interface Content {
  type: "paragraph" | "link"
  content: string
}

export const Post = ({ post }: PostProps) => {
  const minCaracteresToComment = 12

  const [comments, setComments] = useState(["post irado"])
  const [newCommentText, setNewCommentText] = useState("")

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    console.log(event.target.value)
    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })
    console.log(`deletar comentário ${commentToDelete}`)
    setComments(commentsWithoutDeletedOne)
  }

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
  })

  const isNewCommentEmpty =
    newCommentText === "" || newCommentText.length < minCaracteresToComment

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>UX/UI Designer</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map((line) =>
          line.type === "paragraph" ? (
            <p key={line.content}>{line.content}</p>
          ) : (
            <a key={line.content}>
              <p>{line.content}</p>
            </a>
          )
        )}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          name="comment"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
        ></textarea>

        {newCommentText.length < minCaracteresToComment &&
          newCommentText !== "" && (
            <span>
              Escreva mais um pouco, restante:{" "}
              {minCaracteresToComment - newCommentText.length}
            </span>
          )}

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
