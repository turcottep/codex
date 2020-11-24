import React from "react";
import styles from "../../styles/Home.module.css";

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.postToGoogle = this.postToGoogle.bind(this);
    }

    postToGoogle() {
        console.log("lol")
        var field1 = $("#email").val(); 
        var field2 = $("#field_study").val();

        $.ajax({
            url: "https://www.docs.google.com/forms/d/1qJ8yOg670AI2dsUweVNgeSpyVcBIdoOYdN14VpRt8ko/formResponse?",
            data: {
                "entry.217945379": field1,
                "entry.1812034651": field2
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //Success message
                },
                200: function () {
                    //Success Message
                }
            }
        });

        $("#gform *").fadeOut(500);
        $("#gform").prepend(
            "<h1>Thanks For Signing Up, We'll Keep You Posted!</h1>"
        );

    }

    render() {
        return (
            <div name="gform"
                id="gform">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

                <form id="form" className={styles.form} 
                >

                    <label for="fieldStudy">What's your field of Study?</label>
                    <br></br>
                    <select
                        className={styles.input}
                        id="field_study"
                        name="entry.1812034651"
                        class="button"
                    >
                        <option selected value="default"></option>
                        <option value="engineering">Engineering</option>
                        <option value="sciences">Sciences (Computer, Pure, Human, etc.)</option>
                        <option value="law">Law</option>
                        <option value="teaching">Teaching</option>
                        <option value="philosophy">Philosophy</option>
                        <option value="marketing">Marketing</option>
                        <option value="administration">Administration</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="other">Other</option>
                    </select>{" "}
                    <br></br> <br></br>

                    <input
                        type="email"
                        className={styles.email}
                        name="entry.217945379"
                        id="email"
                        placeholder="Your email"
                        required
                    />
                <button type="button" className={styles.submit} onClick={this.postToGoogle}>
                        Sign Up
          </button>
                </form>

            </div>
        );
    }
}


