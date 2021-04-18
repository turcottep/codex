import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Navbar() {
  const [session, loading] = useSession();

  return (
    <nav id="header" className="fixed w-full sm:h-24 z-30 top-0 text-black">
      <div className="w-full sm:px-2 md:px-10 2xl:px-20 lg:mx-auto flex flex-wrap items-center justify-between h-full py-4 px-4">
        <div className="flex items-center">
          <a
            className="toggleColour text-gray-700 no-underline hover:no-underline font-bold text-2xl sm:text-4xl"
            href="#"
          >
            {/* <Link href="/">Salsa</Link> */}
            CryptoSeeds
          </a>
          {/* <img
            className="w-4 h-4 mx-2"
            src="./icons/icon-192x192.png"
            alt="icon"
          /> */}
        </div>
        <div className="block sm:hidden pr-4">
          {/* <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button> */}
        </div>
        <div
          className="w-full flex-grow sm:flex sm:items-center sm:w-auto hidden mt-2 sm:mt-0 bg-white sm:bg-transparent text-black p-4 sm:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset sm:flex justify-end flex-1 items-center">
            {/* <li className="mr-3"></li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                Contact us
              </a>
            </li> */}
            {/* <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                Log In
              </a>
            </li> */}
          </ul>
          {/* <button
            id="navAction"
            className="mx-auto sm:mx-0 hover:underline bg-tomato text-gray-100 font-bold rounded-full mt-4 sm:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Sign Up
          </button> */}
        </div>
      </div>
      {/* <hr className="border-b border-red-400 opacity-25 my-0 py-0" /> */}
    </nav>
  );
}
