import React from 'react';
import styles from './styles.module.scss';
/**
 * @author      Nandani.V.Patel
 * @date        07th Dec 2024
 * @description Implement UI Anime Status label
 * @param       display for labels
 * @response     
 **/

const Label = ({ label, value, onCancel }) => {
  
  if (label === "Type" && value === "") {
    return null;
  }
  if (label === "Status" && value === "All") {
    return null;
  }
  if (label === "Title" && value === "") {
    return null;
  }

  return (
    <>
      <label className={styles.labels}>
        <span className={styles.labletext}>{label}:</span>
        <div className={styles.lablevalue}>
          <span className={styles.valuetext}>{value}</span>
          <button className={styles.btn} onClick={onCancel}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </label>
    </>
  );
};

export default Label;
