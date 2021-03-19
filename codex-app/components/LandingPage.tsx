import React from "react";
import NameForm from "./NameForm";

export default function LandingPage() {
  return (
    <div className="bg-red-200">
      <div className="flex-direction:column h-screen">
        <div className="md:flex aligned md:py-32 md:mx-16">
          <div className="flex-row">
            <h1 className="justify-center text-4xl text-tomato mx-4 font-bold py-4 md:text-6xl">
              Level Up Your Cooking
            </h1>
            <p className="px-4 mx-auto">
              <span className="font-bold text-gray-600">
                Connecting friends of today with the cooks of tomorrow
              </span>
            </p>
          </div>
          <div className="w-32">
            <div className="z-10">
              <img
                className="w-3/4 md:w-1/4 mx-auto py-10 "
                src="./nourriture.svg"
                alt="food"
              />
            </div>
            <div className="z-0">
              <img
                className="w-3/4 md:w-1/4 mx-auto py-10 "
                src="./tomato.svg"
                alt="tomato"
              />
            </div>
          </div>
        </div>
        <div className="py-4">
          <NameForm />
        </div>
      </div>
    </div>
  );
}
