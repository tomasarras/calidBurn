import React from "react";
import Link from "next/link";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = (props) => {
  const { children, onClick = () => {}, className = "", href = "" } = props;

  return (
    <button 
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {href !== ""
        ? <Link legacyBehavior href={href} ><a className={styles.linkBtn}>{children}</a></Link>
        : children
      }
    </button>
  );
};

export default PrimaryButton;
