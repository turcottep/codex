import Head from "next/head";
import "tailwindcss/tailwind.css";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import React from "react";
//import Link from "next/link";
import { useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
      <Head>
    <title>Salsa</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
      </Head>
      <Navbar />
      <main className="">
        {!session && (
          <>
            <LandingPage />
          </>
        )}
        {session && (
          <>
            <div> Logged In </div>
            <a className="rounded bg-blue-500" href="/reader">
              Go to reader
            </a>
          </>
        )}
      </main>
    </div>
  );
}
