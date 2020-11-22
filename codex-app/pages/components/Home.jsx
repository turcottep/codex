import React from "react";
import styles from "../../styles/Home.module.css";
import Titles from "./Titles";
import NameForm from "./NameForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Titles />
      <NameForm />
    </div>
  );
}
