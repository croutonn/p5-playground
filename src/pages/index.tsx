import Head from "next/head";

import type { NextPage } from "next";

import styles from "@/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>p5.js Playground</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://p5js.org/">p5.js</a> Playground!
        </h1>
      </main>
    </div>
  );
};

export default Home;
