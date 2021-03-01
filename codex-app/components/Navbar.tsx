import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";

export default function Navbar() {
  const [session, loading] = useSession();

  return (
    <nav className="flex justify-between bg-red-200 align-center md:px-16 px-4">
      <div className="flex items-center">
        <p className="text-xl text-gray-500 font-bold text-grey-600">
          <Link href="/">Salsa Recipes</Link>
        </p>
        <img
          className="w-4 h-4 mx-2"
          src="./icons/icon-192x192.png"
          alt="icon"
        />
      </div>

      <div className="flex">
        {!session && (
          <>
            <button
              onClick={() => signIn}
              className="rounded bg-blue-500 hover:bg-blue-600 text-gray-600 py-2"
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
              className="rounded bg-gray-500 hover:bg-blue-600 text-gray-600 py-2 max-h-10"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
