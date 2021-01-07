import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Navbar() {
  const [session, loading] = useSession();

  return (
    <nav className="flex justify-between align-center py-4 bg-gray-100">
      <p className="text-2xl font-bold text-grey-800 px-4">Codex Reader </p>
      <div className="flex">
        {!session && (
          <>
            <button
              onClick={() => signIn}
              className="rounded bg-blue-500 hover:bg-blue-600 text-white mx-4 py-2 px-4"
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
              className="rounded bg-gray-500 hover:bg-blue-600 text-white py-2 px-4 mx-4 max-h-10"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
