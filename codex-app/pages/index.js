import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home2 from "./components/Home.jsx";

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Codex Reader</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript">var submitted=false;</script>
      </Head>
      <body>
        <Home2 />
      </body>
    </div>
  );
}
