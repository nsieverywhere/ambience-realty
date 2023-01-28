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
      // SecureToken: "2c1a1197-81ef-4b14-a5d8-1239e25d8519",
      Host: "smtp.elasticemail.com",
      Username: "ambiencerealtyng@gmail.com",
      Password: "FC99A060378F1BA4955BEAE0043AF7347EAA",
      To: "ambiencerealtyng@gmail.com",
      Port: 2525,
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
