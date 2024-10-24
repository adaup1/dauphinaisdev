"use client";

import styles from "./page.module.css";
import { BuildingBrick } from "./components/BuildingBrick";

export default function Home() {
  return (
    <div className={styles.page}>
      <BuildingBrick />
    </div>
  );
}
