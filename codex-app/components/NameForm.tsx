import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.postToGoogle = this.postToGoogle.bind(this);
  }

  postToGoogle() {
    console.log("lol");
    var field1 = $("#email").val();
    var field2 = $("#field_study").val();

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
      <div className="bg-blue-500 rounded">
        <div className="object-center text-4xl text-white font-bold px-4">
          SIGN UP
        </div>
        <div className="gform" id="gform">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

          <form id="form" className="form my-2 px-4">
            <div className="flex-direction:column ">
              <select
                id="field_study"
                name="entry.1812034651"
                className="button rounded"
              >
                <option selected value="default">
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
              </select>{" "}
              <input
                type="email"
                className="email rounded my-2 mx-2 w-80"
                name="entry.217945379"
                id="email"
                placeholder="Email"
                required
              />
              <button
                type="button"
                className="submit bg-blue-300 font-bold rounded px-1 py-2 mx-1 my-2"
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
