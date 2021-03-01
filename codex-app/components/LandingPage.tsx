import React from "react";
import NameForm from "./NameForm";

export default function LandingPage() {
  return (
    <div className="bg-red-200">
      <div className="flex-direction:column h-screen">
        <div className="md:flex aligned md:py-32 md:mx-16">
          <div className="flex-row">
            <h1 className="justify-center text-4xl text-tomato mx-4 font-bold py-4 md:text-6xl">
              A New Way To Cook
            </h1>
            <p className="px-4 mx-auto">
              <span className="font-bold text-gray-600">
                Have recipes recommended to you by an{" "}
              </span>
              <span className="font-bold text-gray-600 text-bold">
                artificial intelligence
              </span>
            </p>
          </div>
          <img
            className="w-3/4 md:w-1/4 mx-auto py-10 "
            src="./nourriture.svg"
            alt="next"
          />
        </div>
        <div className="py-4">
          <NameForm />
        </div>
      </div>

      <div
        className=""
        // className="bg-no-repeat bg-cover bg-top h-128 md:h-3/4"
        // style={{
        //   backgroundImage: "url('./bg-1.svg')",
        // }}
      >
        <div className="flex-direction:column py-20">
          <div className="bg-gray-200 rounded mx-4 w-20">Share recipes</div>
          <div className="bg-gray-200 rounded mx-4 w-20">Share recipes</div>
          <div className="bg-gray-200 rounded mx-4 w-20">Share recipes</div>
        </div>
      </div>
    </div>
  );
}
