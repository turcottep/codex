import { useSession } from "next-auth/client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ReaderContainer from "../components/Reader/ReaderContainer";

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
      <main>
        <div>
          <Navbar />
          <h1>You aren't signed in, please sign in first</h1>
        </div>
      </main>
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
