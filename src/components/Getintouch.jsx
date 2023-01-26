import React from "react";
import { Heading3 } from "./Heading3";
import { useState } from "react";

function Getintouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      SecureToken: "a19830e6-5af2-4bbe-89e3-087f7a7b8d1f",
      To: "ambiencerealtyng@gmail.com",
      From: email,
      Subject: subject,
      Body: message,
    };

    if (window.Email) {
      window.Email.send(config).then(() => {
        setSuccess("Sent Successfully!");

        function remove() {
          setSuccess("");
        }

        window.setTimeout(remove, 4000);
      });
    }
  };

  return (
    <div className=" form1 ">
      <div className=" col-lg-6  ">
        <Heading3>Get in Touch</Heading3>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="form-group inputfield">
          <small class="form-text text-muted">Name*</small>
          <input
            type="text"
            class="form-control textinputs"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div class="form-group inputfield">
          <small class="form-text text-muted">Email*</small>
          <input
            type="email"
            class="form-control textinputs"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />

        <div class="form-group inputfield">
          <small class="form-text text-muted">Subject*</small>
          <input
            type="text"
            class="form-control textinputs"
            placeholder="Type the subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <br />

        <div class="form-group inputfield">
          <small class="form-text text-muted">Message*</small>

          <textarea
            class="form-control textinputsarea"
            required
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <br />

        <button type="submit" class=" ctabtn">
          Submit
        </button>
        <p>{success}</p>
      </form>
    </div>
  );
}

export default Getintouch;
