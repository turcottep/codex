import React from "react";
import styles from "../../styles/Home.module.css";
import ReactDOM from "react-dom";

export default function Form() {
  return (
    <div className={styles.formDiv}>
      <form
        className={styles.form}
        name="gform"
        id="gform"
        action="https://docs.google.com/forms/d/1qJ8yOg670AI2dsUweVNgeSpyVcBIdoOYdN14VpRt8ko/formResponse?"
        target="hidden_iframe"
        onsubmit="submitted=true"
      >
        <label for="fieldStudy">What's your field of Study?</label>
        <select
          className={styles.input}
          id="entry.1812034651"
          name="entry.1812034651"
          class="button"
        >
          <option selected value="default"></option>
          <option value="engineering">Engineering</option>
          <option value="sciences">Sciences (Computer, Pure, Human, etc.)</option>
          <option value="law">Law</option>
          <option value="teaching">Teaching</option>
          <option value="philosophy">Philosophy</option>
          <option value="marketing">Marketing</option>
          <option value="administration">Administration</option>
          <option value="mathematics">Mathematics</option>
          <option value="other">Other</option>
        </select> <br></br> <br></br>

        <input
          type="email"
          className={styles.email}
          name="entry.217945379"
          id="entry.217945379"
          placeholder="Your email"
          required
        />

        <button className={styles.submit} type="submit" id="submit_button">
          Sign Up
        </button>
      </form>

      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad="if(submitted) {}"
      ></iframe>

    </div>
    
  );
}
