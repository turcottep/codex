import Head from 'next/head'
import "tailwindcss/tailwind.css";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#90cdf4" />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />

      </Head>
      <Navbar/>
      <main>
        <h1> CODEX APP</h1>
      </main>

    </div>
  )
}
