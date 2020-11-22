import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home2 from "./components/Home.jsx";

export default function Home() {
  return (
    <html>
    <div className={styles.main}>
      <Head>
        <title>Codex Reader</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript">var submitted=false;</script>
        <meta httpEquiv="Content-Security-Policy" 
        content="frame-src https://docs.google.com/forms/;"></meta>
      </Head>
      <body className={styles.body}>
        <Home2 />
      </body>
    </div>
    </html>
  );
}
