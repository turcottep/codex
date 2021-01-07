import React from "react";
import FileUpload from "./FileUpload";

export default function ReaderContainer() {
  return (
    <div className="flex-direction:column py-4">
      <div className="object-center">Upload a PDF</div>
      <FileUpload />
    </div>
  );
}
