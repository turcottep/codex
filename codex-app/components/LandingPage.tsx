import React from "react";
import NameForm from "./NameForm";

export default function LandingPage() {
  return (
    <div
      className="relative bg-red-200 h-full w-full bg-right bg-0 md:bg-50% bg-no-repeat bg-fixed overflow-hidden"
      // style={{
      //   backgroundImage: "url('./nourriture_spaced.svg')",
      // }}
    >
      <div className="static md:hidden">
        <div className="absolute h-1/8 w-1/5 top-4 right-0">
          <img src="./Boulettes_half.svg" alt="boulettes" />
        </div>
        <div className="absolute h-1/8 w-1/5 top-40 left-0">
          <img src="./Pain_half.svg" alt="pain" />
        </div>
        <div className="absolute h-1/8 w-1/5 top-2/5 left-0">
          <img src="./Salade_half.svg" alt="salade" />
        </div>
        <div className="absolute bottom-1/5 left-0 h-1/8 w-1/5">
          <img src="./Cucumber_half.svg" alt="cucumba" />
        </div>
        <div className="absolute bottom-96 right-0 h-1/8 w-1/5">
          <img src="./Bacon_half.svg" alt="Bacon" />
        </div>
        <div className="absolute bottom-0 left-0 h-1/8 w-1/5">
          <img src="./Fromage_half.svg" alt="Cheese" />
        </div>
        <div className="absolute bottom-0 right-0 h-1/8 w-1/5">
          <img src="./Tomates_half.svg" alt="Tomatoes" />
        </div>
      </div>
      <div className="h-screen justify-evenly px-3 md:px-10 2xl:px-20 md:mx-auto flex flex-col items-center">
        <div className="flex flex-col w-full justify-between items-center md:self-start md:flex-row">
          <div className="flex flex-col h-full w-full justify-between md:justify-around items-center md:items-start text-center md:text-left">
            <h1 className="my-4 text-tomato xl:w-2/3 text-5xl xl:text-6xl font-bold leading-tight z-50">
              <span>Level Up Your Cooking</span>
            </h1>
            <p className="hidden md:block leading-normal md:w-2/5 text-gray-600 text-3xl mb-8 z-50">
              Create recipes for your friends to see, and try new recipes
              created by them.
            </p>
          </div>
          <div className="static flex justify-center md:w-1/3">
            <div className="invisible md:visible  absolute inset-y-0 right-0 w-1/2">
              <img src="./nourriture_round.svg" alt="Foods" />
            </div>
            <div className="z-50">
              <img className="pb-6 w-full lg:w-64 2xl:w-80" src="tomato.svg" />
            </div>
          </div>
          <div className="text-center z-50">
            <p className="md:hidden leading-normal md:w-3/5 text-gray-600 text-2xl mb-8">
              Create recipes for your friends to see, and try new recipes
              created by them.
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
