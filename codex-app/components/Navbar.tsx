import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";

export default function Navbar() {
  const [session, loading] = useSession();

  return (
    <nav className="flex justify-between align-center md:mx-16">
      <div className="flex items-center">
        <p className="text-xl font-bold text-grey-600 mx-2">
          <Link href="/">Codex Reader</Link>
        </p>
        <img className="w-4 h-4 " src="./icons/icon-256x256.png" alt="icon" />
      </div>

      <div className="flex">
        {!session && (
          <>
            <button
              onClick={() => signIn}
              className="rounded bg-blue-500 hover:bg-blue-600 text-gray-600 mx-4 py-2 px-4"
            >
              Login
            </button>
          </>
        )}
        {session && (
          <>
            <div className="mx-2 align-center">Welcome {session.user.name}</div>
            <button
              onClick={() => signOut}
              className="rounded bg-gray-500 hover:bg-blue-600 text-gray-600 py-2 px-4 mx-4 max-h-10"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
