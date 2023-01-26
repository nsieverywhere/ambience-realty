import React from "react";
import { Container } from "../components/container";
import { Word } from "../components/Word";
import Getintouch from "../components/Getintouch";

function Contact() {
  return (
    <div class="container-fluid">
      <Container
        className="row"
        background="#042a13"
        height=".5rem"
      ></Container>
      <Container className="hero3 row" background="#eeebd3" height="40rem">
        <div className="contactpage col-lg-6">
          <Word size="1.3rem">
            The future of financial success awaits you, let us help you reach
            your goal!
          </Word>

          <Getintouch />
        </div>
        <div className=" col-lg-6">
          <img src="/images/Ambience_realty_boss.jpeg" alt="CEO" />
        </div>
      </Container>

      <Container
        className="row"
        background="#042a13"
        height=".5rem"
      ></Container>

      <Container
        className="row"
        background="#eeebd3"
        height=".5rem"
      ></Container>
    </div>
  );
}

export default Contact;
