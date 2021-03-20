import React from "react";
import NameForm from "./NameForm";

export default function LandingPage() {
  return (
    <div
      className="md:pt-24 bg-red-200 min-w-full min-h-full h-screen bg-cover bg-top md:bg-right md:bg-50% bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('./nourriture_spaced.svg')",
      }}
    >
      <div className="h-full container justify-evenly px-3 2xl:px-10 lg:mx-auto flex flex-wrap flex-col items-center">
        <div className="flex flex-col w-full justify-between items-center md:self-start md:flex-row">
          <div className="flex flex-col  w-full  justify-between items-start text-center md:text-left">
            <h1 className="my-4 text-tomato 2xl:w-2/3 text-5xl xl:text-6xl font-bold leading-tight">
              <span>The Social Network</span>
              <br></br>
              <span>For Foodies</span>
            </h1>
            <p className="leading-normal md:w-3/5 text-gray-600 text-2xl mb-8">
              Create recipes for your friends to see, and try new recipes
              created by them.
            </p>
          </div>
          <div className="flex justify-center h-full w-2/3 md:w-3/5">
            <img className="pb-6 w-auto" src="tomato.svg" />
          </div>
        </div>
        <div className="md:self-start w-full md:w-2/5 lg:w-1/2">
          <NameForm />
        </div>
      </div>
    </div>
  );
}
