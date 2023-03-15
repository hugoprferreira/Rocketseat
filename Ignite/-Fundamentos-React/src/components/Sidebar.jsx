import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className="{styles.sidebar}">
      <img src="https://images.unsplash.com/photo-1572940639050-49166eb37404?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"></img>

      <div className={styles.profile}>
        <Avatar src="https://github.com/hugoprferreira.png" />
        <strong>Hugo Pedrozo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
