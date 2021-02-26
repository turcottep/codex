import React from "react";
import NameForm from "./NameForm";

export default function LandingPage() {
  return (
    <div className="flex-direction:column">
      <div className="md:flex aligned md:py-32 md:mx-16">
        <div className="flex-row">
          <h1 className="justify-center text-4xl text-azul mx-4 font-bold py-4 md:text-6xl">
            A New Way To Study
          </h1>
          <p className="px-4 mx-auto">
            <span className="font-bold text-gray-600">
              Have your schoolbook read to you by an{" "}
            </span>
            <span className="font-bold text-gray-600 text-bold">
              artificial intelligence
            </span>
          </p>
        </div>
        <img
          className="w-40 md:w-1/4 mx-auto py-4 "
          src="./schoolbooks-colour.svg"
          alt="next"
        />
      </div>
      <div className="my-4">
        <NameForm />
      </div>
      <div
        className="bg-no-repeat bg-cover bg-top h-128 md:h-3/4"
        style={{
          backgroundImage: "url('./bg-1.svg')",
        }}
      >
        <div className="py-24">
          <ul className="list-disc list-inside text-white">
            <li>Reads PDF out loud with a human-like voice</li>
            <li>Sorts text from sections of interest</li>
            <li>
              Doesn't read useless information (page number, chapters numbers,
              etc.)
            </li>
            <li>Syncs across your devices</li>
            <li>Automatically creates Highlight and take notes for you</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
