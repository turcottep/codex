import Head from "next/head";
import "tailwindcss/tailwind.css";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

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
      <Navbar />
      <main className="container mx-auto my-6 max-w-xl">
        {!session && (
          <>
            <div>Not in session</div>
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {session && (
          <>
            <div>In as {session.user.email}</div>
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
        <LandingPage />
      </main>
    </div>
  );
}
