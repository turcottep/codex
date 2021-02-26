import { useSession } from "next-auth/client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ReaderContainer from "../components/Reader/ReaderContainer";
import Head from "next/head";

export default function Reader() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/reader");
      const data = await res.json();

      if (data.content) {
        setContent(data.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <div>
        <Head>
          <title>Codex Reader</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#90cdf4" />
          <link rel="apple-touch-icon" href="/logo-96x96.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
        </Head>
        <main>
          <div>
            <Navbar />
            <h1>You aren't signed in, please sign in first</h1>
          </div>
        </main>
      </div>
    );
  }

  return (
    <main>
      <div>
        <Navbar />
        <ReaderContainer />
      </div>
    </main>
  );
}
