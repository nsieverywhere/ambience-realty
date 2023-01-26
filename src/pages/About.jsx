import React from "react";
import { Container } from "../components/container";

function About() {
  return (
    <div class="container-fluid">
      <Container className=" row property" background="#eeebd3" height="40rem">
        <div className="about row">
          <div className="abouttext col-lg-6">
            <h1>Ambience Realty</h1> <br />
            <h5>The Property Experts</h5>
            <br />
            <p>
              Ambience Realty is a registered real estate agency in Nigeria that
              helps individuals acquire real estate and build investment
              portfolio by connecting them with credible developers and
              profitable locations.
              <br /> <br />
              As a multidimensional firm, we have properties in various
              locations across Nigeria, and we will love to guide you through
              the steps in investing in real estate.
              <br />
            </p>
            <p>Contact Us Today!</p>
          </div>
          <div className="aboutimage col-lg-6">
            <img src="images/Ambience_realty.jpeg" alt="company_logo" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
