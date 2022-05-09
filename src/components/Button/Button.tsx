import React from "react";
import * as styles from "./Button.module.scss";

export default function Button() {
  return (
    <button form="add-experience" className={styles.button} type="submit">
      Add New Entry
    </button>
  );
}
