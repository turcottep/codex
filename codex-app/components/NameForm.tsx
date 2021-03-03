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
      <div className="bg-gray-100 rounded-xl max-w-xl mx-4 sm:mx-auto ">
        <div className="object-center text-4xl text-gray-600 font-bold px-4 pt-4">
          SIGN UP
        </div>
        <div className="gform" id="gform">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

          <form id="form" className="form my-2 px-4">
            <div className="flex flex-col ">
              {/* <select
                required
                id="field_study"
                name="entry.1812034651"
                className="button rounded text-gray-400 hover:text-gray-600"
                // defaultValue="Field of study"
              >
                <option hidden disabled selected value="default">
                  Field of study
                </option>
                <option value="engineering">Engineering</option>
                <option value="engineering">Health</option>
                <option value="sciences">Sciences </option>
                <option value="law">Law</option>
                <option value="teaching">Teaching</option>
                <option value="philosophy">Philosophy</option>
                <option value="marketing">Marketing</option>
                <option value="administration">Administration</option>
                <option value="mathematics">Mathematics</option>
                <option value="other">Other</option>
              </select>*/}
              <div className="flex flex-col">
                {/* <span className="text-gray-100 group-hover:text-gray-600 mt-4">
                  Email:
                </span> */}
                <input
                  type="email"
                  className="email rounded my-2 px-2 py-2 mx-0"
                  name="entry.217945379"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <button
                type="button"
                className="submit bg-tomato text-white font-bold rounded px-2 py-1 mx-auto my-2 mb-4"
                onClick={this.postToGoogle}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
