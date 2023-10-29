/** @format */
"use client";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/home");
  }, []);

  return (
    <main className={styles.main}>
      <h1>Loading</h1>
    </main>
  );
}
