import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function ButtonSignGithub() {
  const isUserLogged = true;

  return isUserLogged ? (
    <button className={styles.signButton} type="button">
      <FaGithub color="#04d361" />
      Carlos Eduardo Sousa
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signButton} type="button">
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
