import React from "react";
import FileUpload from "./FileUpload";
import PDFReader from "./PDFReader";

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
      <div className="flex-direction:column bg-gray-100 py-4">
        <FileUpload>
          <div className="rounded bg-blue-500 max-w-auto"></div>
        </FileUpload>

        <div className="my-8 mx-8">
          <PDFReader />
        </div>
      </div>
    );
  }
}
