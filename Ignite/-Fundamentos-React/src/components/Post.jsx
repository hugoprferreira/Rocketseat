import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post() {
  return (
    <article className="{styles.post}">
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/hugoprferreira.png" />
          <div className={styles.authorInfo}>
            <strong>Hugo Pedrozo</strong>
            <span>Web Developr</span>
          </div>
        </div>

        <time
          tittle="5 de novembro meia noite e 10"
          dateTime="2022-05-11 00:10:55"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeera</p>
        <p>Acabei de subir mais um projeto</p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

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
  );
}
