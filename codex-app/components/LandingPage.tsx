import React from "react";
import NameForm from "./NameForm";

export default function LandingPage() {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Connecting friends of today with the cooks of tomorrow.
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Connect with millions of foodies just like you and share your wildest recipes!
          </p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-2/3 z-50" src="tomato.svg" />
        </div>
      </div>

      <NameForm />

    </div>
    
  );
}
