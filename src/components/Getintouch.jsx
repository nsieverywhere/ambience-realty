import React from "react";
import { Heading3 } from "./Heading3";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

function Getintouch() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    function remove() {
      setSuccess("");
    }

    // const config = {
    //   SecureToken: "3ecf4187-59f5-4f9f-8135-245ebaf117b8",
    //   To: "ambiencerealtyng@gmail.com",
    //   From: email,
    //   Subject: subject,
    //   Body: message,
    // };

    // if (window.Email) {
    //   window.Email.send(config).then(() => {
    //     setSuccess("Sent Successfully!");

    //     function remove() {
    //       setSuccess("");
    //     }

    //     window.setTimeout(remove, 4000);
    //   });
    // }
    emailjs
      .sendForm(
        "service_7my4mtb",
        "template_fofy196",
        form.current,
        "w2g6m_U1JFQryWjcd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Sent Successfully!");

          window.setTimeout(remove, 2500);
        },
        (error) => {
          console.log(error.text);
          setSuccess("Did not send, try again.");

          window.setTimeout(remove, 2500);
        }
      );
    event.target.reset();
  };

  return (
    <div className=" form1 ">
      <div className=" col-lg-6  ">
        <Heading3>Get in Touch</Heading3>
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div class="form-group inputfield">
          <small class="form-text text-muted">Name*</small>
          <input
            type="text"
            class="form-control textinputs"
            placeholder="Enter your name"
            required
            name="from_name"
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
            name="reply_to"
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
            name="subject"
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
            name="message"
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
