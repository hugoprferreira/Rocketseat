import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https:://github.com/hugoprferreira.png",
      name: "Hugo Pedrozo",
      role: "Web developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeera" },
      { type: "paragraph", content: "Acabei de subir mais um projeto" },
      { type: "Link", content: "Jane.design/doctorcare</a>" },
      { type: "Link", content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https:://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeera" },
      { type: "paragraph", content: "Acabei de subir mais um projeto" },
      { type: "Link", content: "Jane.design/doctorcare</a>" },
      { type: "Link", content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
