import React from "react";
import NameForm from "./NameForm";
import Title from "./Title";

export default function LandingPage() {
  return (
    <div className="flex-direction:column py-4">
      <div className="">
        <Title />
      </div>
      <div className="my-4 py-2">
        <NameForm />
      </div>
    </div>
  );
}
