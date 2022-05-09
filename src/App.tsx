import React from "react";
import * as styles from "./App.module.scss";
import Button from "./components/Button/Button";
import AddExperience from "./components/Experience/AddExperience";
import Experience, { Props } from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useAppSelector } from "./store/hooks";

export default function App() {
  const experiences = useAppSelector((state) => state.experience);
  const renderExperiences = experiences.map((experience: Props) => (
    <Experience
      title={experience.title}
      company={experience.company}
      date={experience.date}
      city={experience.city}
      description={experience.description}
      key={experience.company}
    />
  ));
  return (
    <>
      <Navbar />
      <main className={styles.paper}>
        <Button />
        <div className={styles.inner}>
          <h1 className={styles.heading}>Experience</h1>
          <AddExperience />
          {renderExperiences}
        </div>
      </main>
      <Footer />
    </>
  );
}
