import React from "react";
import styles from "../styles/overviewSection.module.css";
const OverviewSection = () => {
  return (
    <div className={styles.overview_container}>
      <div className={styles.overview_accordian}></div>
      <div className={styles.title}>Warrenty and Return</div>
      <div className={styles.warrenty_container}>
        <div className={styles.warrenty_title}>
          WARRANTY, RETURNS, AND ADDITIONAL INFORMATION
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.heading}>Return Policies</div>
            <div className={styles.content}>
              Return for refund within: 30 days
            </div>
            <div className={styles.content}>
              Return for replacement within: 30 days
            </div>
            <div className={styles.content}>
              This item is covered by IIEC.com's Standard Return Policy
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.heading}>Manufacturer Contact Info</div>
            <div className={styles.content}>Manufacturer Website</div>
            <div className={styles.content}>Support Phone: 1-800-275-2273</div>
            <div className={styles.content}>Support Website</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
