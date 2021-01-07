import React from "react";
import FileUpload from "./FileUpload";

export default class ReaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };

    this.callbackFunction = this.callbackFunction.bind(this);
  }

  callbackFunction = (childData) => {
    this.setState({ message: childData });
  };

  render() {
    return (
      <div className="flex-direction:column py-4">
        <div className="object-center">Upload a PDF</div>
        <FileUpload>
          <div className="rounded bg-blue-500 max-w-auto"></div>
        </FileUpload>
      </div>
    );
  }
}
