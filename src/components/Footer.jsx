import React from "react";
import { Container } from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faTwitter,
  faLinkedinIn,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "a19830e6-5af2-4bbe-89e3-087f7a7b8d1f",
      To: "ambiencerealtyng@gmail.com",
      From: email,
      Subject: "Hello, kindly add me to your Newsletter! ",
      Body: `This is my email: ${email}`,
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
    <Container className="footercontainer" background="#042a13" height="27rem">
      <footer>
        <form className="footerform" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="email">Subscribe Form</label>

            <input
              type="email"
              class="form-control emailinput"
              id="email"
              placeholder="Enter your email"
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
