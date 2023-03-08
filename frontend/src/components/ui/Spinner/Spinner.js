import React from "react";
import styles from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <svg className={styles.spinner} role="alert" aria-live="assertive">
        <circle cx="50" cy="50" r="40" className={styles.circle} />
      </svg>
    </div>
  );
};

export default Spinner;
