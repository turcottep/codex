import React from "react";

// async function fetchLeadsRequest() {
//   const response = await fetch("/api/leads");
//   const { leads } = await response.json();
//   return leads.map((lead) => ({
//     email: lead.email,
//     field: lead.field_study,
//   }));
// }

async function createLeadRequest(mail: string, fiel: string) {
  const response = await fetch("/api/leads/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: mail, field: fiel }),
  });
  const data = await response.json();
  console.log(data);
}
export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.postToGoogle = this.postToGoogle.bind(this);
  }

  postToGoogle() {
    console.log("lol");
    const field1 = $("#email").val().toString();
    const field2 = $("#email").val().toString();

    createLeadRequest(field1, field2);

    $.ajax({
      url:
        "https://www.docs.google.com/forms/d/1qJ8yOg670AI2dsUweVNgeSpyVcBIdoOYdN14VpRt8ko/formResponse?",
      data: {
        "entry.217945379": field1,
        "entry.1812034651": field2,
      },
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          //Success message
        },
        200: function () {
          //Success Message
        },
      },
    });

    $("#gform *").fadeOut(500);
    $("#gform").prepend(
      '<h1 className="text-white mx-2">Thanks For Signing Up, We Will Keep You Posted!</h1>'
    );
  }

  render() {
    return (
      <div className="">
        <div className="gform" id="gform">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

          <form id="form" className="form w-full">
            <div className="flex xl:text-xl flex-col lg:flex-row ">
              {/* <span className="text-gray-100 group-hover:text-gray-600 mt-4">
                  Email:
                </span> */}
              <input
                type="email"
                className="email w-full text-center lg:text-left rounded-t-xl lg:rounded-r-none lg:rounded-l-xl px-2 py-2"
                name="entry.217945379"
                id="email"
                placeholder="Email"
                required
              />
              <button
                type="button"
                className="submit md:px-4 2xl:text-xl text-center whitespace-nowrap bg-tomato text-white font-bold rounded-b-xl lg:rounded-l-none lg:rounded-r-xl w-full lg:w-2/5 px-2 py-2"
                onClick={this.postToGoogle}
              >
                Get Early Acess
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
