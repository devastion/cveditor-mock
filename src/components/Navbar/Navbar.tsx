/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.a} href="#">
          Dashboard
        </a>
        <a className={styles.a} href="#">
          Help
        </a>
      </nav>
    </header>
  );
}
