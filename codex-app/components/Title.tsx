import React from "react";

export default function Title() {
  return (
    <div className="aligned">
      <h1 className="object-center text-5xl font-bold py-4">
        Revolution of Studying
      </h1>
      <div className="mx-2">
        <p className="">Sign Up For Beta Release!</p>
        <p className="">
          Codex Reader is almost ready. If you're interested in testing it out,
          then sign up below to get exclusive access.
        </p>

        <ul className="list-disc list-inside">
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
  );
}
