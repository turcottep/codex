import React from "react";
import Dropzone, {
  IDropzoneProps,
  ILayoutProps,
} from "react-dropzone-uploader";

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

const Layout = ({
  input,
  previews,
  submitButton,
  dropzoneProps,
  files,
  extra: { maxFiles },
}: ILayoutProps) => {
  return (
    <div>
      {previews}

      <div {...dropzoneProps}>{files.length < maxFiles && input}</div>

      {files.length > 0 && submitButton}
    </div>
  );
};
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
      console.log(file.file.name);
      // req.attach(file.name, file);
    });

    // req.end();
  }

  render() {
    // const toast = (innerHTML) => {
    //   const el = document.getElementById("toast");
    //   el.innerHTML = innerHTML;
    //   el.className = "show";
    //   setTimeout(() => {
    //     el.className = el.className.replace("show", "");
    //   }, 3000);
    // };
    // const getUploadParams = () => {
    //   return { url: "https://httpbin.org/post" };
    // };
    const handleChangeStatus = ({ meta, remove }, status) => {
      console.log(meta.name);
    };

    return (
      <div className="bg-blue-500 rounded h-auto py-2 mx-auto max-w-md">
        <React.Fragment>
          <div className="text-white text-3xl font-bold text-center" id="toast">
            Upload a document
          </div>
          <div className="rounded bg-blue-300  border-blue-800 text-center mx-3 my-2">
            <Dropzone
              // getUploadParams={getUploadParams}
              onChangeStatus={handleChangeStatus}
              maxFiles={1}
              multiple={false}
              LayoutComponent={Layout}
              canCancel={false}
              inputContent="Drag file or:"
              styles={{
                dropzone: { width: 400, height: 200 },
                dropzoneActive: { borderColor: "green" },
              }}
            />
          </div>
        </React.Fragment>
      </div>
    );
  }
}
