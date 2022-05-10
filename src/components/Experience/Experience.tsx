/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import * as styles from "./Experience.module.scss";

export type Props = {
  title: string;
  company: string;
  date: string;
  city: string;
  description: string;
};

export default function Experience({
  title,
  company,
  date,
  city,
  description,
}: Props) {
  // ! FIX TYPES
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const edit = (e: any): void => {
    e.currentTarget.contentEditable = true;
  };

  return (
    <div className={styles.container}>
      <h1
        onClick={edit}
        className={`${styles.title} ${styles.input} ${styles.edit}`}>
        {title}
      </h1>
      <h2
        onClick={edit}
        className={`${styles.company} ${styles.input} ${styles.edit}`}>
        {company}
      </h2>
      <h3
        onClick={edit}
        className={`${styles.info} ${styles.input} ${styles.edit}`}>
        {date}
      </h3>
      <h4
        onClick={edit}
        className={`${styles.info} ${styles.input} ${styles.edit}`}>
        {city}
      </h4>
      <h5
        onClick={edit}
        className={`${styles.description} ${styles.input} ${styles.edit}`}>
        {description}
      </h5>
    </div>
  );
}
