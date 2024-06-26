"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import { RecoilRoot } from "recoil";
import Animelist from "./components/Animelist/Animelist";

export default function Home() {
  return (
    <RecoilRoot>
      <main className={styles.main}>
        <Header />
        <Animelist />
      </main>
    </RecoilRoot>
  );
}
