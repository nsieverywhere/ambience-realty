import React from "react";
import { Container } from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  faTwitter,
  faLinkedinIn,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    function remove() {
      setSuccess("");
    }

    emailjs
      .sendForm(
        "service_7my4mtb",
        "template_k06zlwr",
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
  // };
  return (
    <Container className="footercontainer" background="#042a13" height="27rem">
      <footer>
        <form ref={form} className="footerform" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="email">Subscribe Form</label>

            <input
              type="email"
              class="form-control emailinput"
              id="email"
              placeholder="Enter your email"
              name="message"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" className="emailsubmit" value="submit" />
            <p>{success}</p>
          </div>
        </form>
        <a className="contactus" href="mailto:ambiencerealtyng@gmail.com">
          ambiencerealtyng@gmail.com
        </a>
        <a className="contactus" href="tel:+2348102756932">
          +2348102756932
        </a>

        <div className="sociallinks">
          <a href="https://web.facebook.com/ambiencerealty">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/ambiencerealty">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/martha-simon-okon/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <p>©2022 by Ambience Realty.</p>
      </footer>
    </Container>
  );
}

export default Footer;
