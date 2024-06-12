"use client";

import styles from "./page.module.css";
import Header from "@/components/Header";
import RuneTree from "@/components/RuneTree";

const MAX_POINTS = 6;
const mockData = [
  [
    { id: "chevrons", isActive: false },
    { id: "silverware", isActive: false },
    { id: "cake", isActive: false },
    { id: "crown", isActive: false },
  ],
  [
    { id: "boat", isActive: false },
    { id: "scuba", isActive: false },
    { id: "lightning", isActive: false },
    { id: "skull", isActive: false },
  ],
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Header>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </Header>
      <RuneTree runes={mockData} maxPoints={MAX_POINTS} />
    </main>
  );
}
