import React from "react";
import styles from "../../styles/Home.module.css";

export default function Titles() {
  return (
    <div className={styles.alligned}>
      <h1 className={styles.title}>Revolution of Studying</h1>
      <p className={styles.header}>Sign Up For Beta Release!</p>
      <p className={styles.description}>
        Codex Reader is almost ready. If you're interested in testing it out,
        then sign up below to get exclusive access.
      </p>
      {/* <p>
        The <b>best</b> pdf reader text-to-speech that:{" "}
      </p> */}
      <ul className={styles.li}>
        <li>Reads PDF out loud with a human-like voice</li>
        <li>Sorts text from sections of interest</li>
        <li>Doesn't read useless information (page number, chapters numbers, etc.)</li>
        <li>Syncs across your devices</li>
        <li>Automatically creates Highlight and take notes for you</li>
      </ul>
    </div>
  );
}
