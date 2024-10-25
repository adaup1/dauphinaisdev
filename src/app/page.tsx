"use client";

import styles from "./page.module.css";
import { BuildingBrick } from "./components/bricks/BuildingBrick";

export default function Home() {
  return (
    <div className={styles.page}>
      <BuildingBrick color={"orange"} />
    </div>
  );
}
