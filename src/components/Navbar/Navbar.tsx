import React from "react";
import * as styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.a} href="dashboard">
          Dashboard
        </a>
        <a className={styles.a} href="help">
          Help
        </a>
      </nav>
    </header>
  );
}
