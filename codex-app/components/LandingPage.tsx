import React from "react";
import NameForm from "./NameForm";

export default function LandingPage() {
  return (
    <div
      className="relative bg-white h-full w-full bg-right bg-0 md:bg-50% bg-no-repeat bg-fixed overflow-hidden"
      // style={{
      //   backgroundImage: "url('./nourriture_spaced.svg')",
      // }}
    >
      <div className="h-screen justify-evenly px-3 md:px-10 2xl:px-20 md:mx-auto flex flex-col items-center">
        <div className="flex flex-col w-full justify-between items-center md:self-start md:flex-row">
          <div className="flex flex-col h-full w-full justify-between md:justify-around items-center md:items-start text-center md:text-left">
            <h1 className="my-4 text-leaf xl:w-2/3 text-5xl xl:text-6xl font-bold leading-tight z-50">
              <span>Join In The Flower Power Revolution!</span>
            </h1>
            <p className="hidden md:block leading-normal md:w-2/5 text-gray-600 text-3xl mb-8 z-50">
              10,000 unique NFTs generated
            </p>
          </div>
          <div className="static flex justify-center md:w-1/3">
            <div className="z-50">
              <img
                draggable="false"
                className="pb-6 mx-auto w-1/4 lg:w-64 2xl:w-80"
                src="plant.svg"
              />
            </div>
          </div>
          <div className="text-center z-50">
            <p className="md:hidden leading-normal md:w-3/5 text-gray-700 text-2xl mb-8">
              10,000 unique NFTs generated
            </p>
          </div>
        </div>
        <div className="md:self-start min-w-0 min-h-0 w-full sm:mx-0 md:w-2/5 lg:w-2/5">
          <NameForm />
        </div>
      </div>
    </div>
  );
}
