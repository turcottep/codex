import React from "react";
import ReactDropzone from "react-dropzone";

// async function fetchLeadsRequest() {
//   const response = await fetch("/api/leads");
//   const { leads } = await response.json();
//   return leads.map((lead) => ({
//     email: lead.email,
//     field: lead.field_study,
//   }));
// }

// async function createLeadRequest(mail: string, fiel: string) {
//   const response = await fetch("/api/leads/create", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email: mail, field: fiel }),
//   });
//   const data = await response.json();
//   console.log(data);
// }

export default class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.drop_cb = this.drop_cb.bind(this);
  }

  drop_cb(files) {
    // POST to a test endpoint for demo purposes
    // const req = request.post("https://httpbin.org/post");

    files.forEach((file) => {
      console.log(file);
      // req.attach(file.name, file);
    });

    // req.end();
  }

  render() {
    return (
      <div className="bg-blue-500 rounded">
        <div className="object-center text-4xl text-white font-bold px-4">
          Upload document
        </div>
        {/* <div className="">
          <ReactDropzone onDrop={this.drop_cb}></ReactDropzone>
        </div> */}
      </div>
    );
  }
}
