import "./App.css"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"

// author: {avatar_url: "", name: "", role: "",}
// publishedAt: Date
// content: string
//

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/wellmota.png",
      name: "Wellington Mota",
      role: "UX/UI Designer @ DevSquad",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de seubir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.",
      },
      {
        type: "paragraph",
        content: "O nomwee do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "UX/UI Designer @ DevSquad",
    },
    content: [
      {
        type: "paragraph",
        content: "Falaefd galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Reffeeturn, evento da Rocketseat.",
      },
      {
        type: "paragraph",
        content: "O nofefefme do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.defsign/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "João da Silva",
      role: "UX/UI Designer @ DevSquad",
    },
    content: [
      {
        type: "paragraph",
        content: "Falfa galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei defe subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.",
      },
      {
        type: "paragraph",
        content: "O nofme do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "janeevvev.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((item) => (
            <Post
              key={item.id}
              author={item.author}
              content={item.content}
              publishedAt={item.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
export default App
