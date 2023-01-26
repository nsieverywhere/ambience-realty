import React from "react";
import { Container } from "../components/container";
import { Heading1 } from "../components/Heading1";
import { Heading2 } from "../components/Heading2";
import { Word } from "../components/Word";
import Getintouch from "../components/Getintouch";

function Home() {
  return (
    <div class="container-fluid">
      <Container
        className="homepage_banner row"
        background="#eeebd3"
        height="40rem"
      >
        <div className="welcome_text col-lg-6">
          <Heading1 size="4rem">Ambience Realty</Heading1>
          <Word size="1.3rem">
            "At Ambience Realty, we take great pride in providing a high level
            of personalized services to property buyers in Lagos and Nigeria.
          </Word>
          <button className="ctabtn">
            <a className="contactus" href="tel:+2348102756932">
              Call Now
            </a>
          </button>
        </div>
        <div className=" col-lg-6"></div>
      </Container>
      <Container className="row services" background="#042a13" height="17rem">
        <Heading2 color="#eeebd3" size="3rem">
          Services we Offer
        </Heading2>
      </Container>
      <Container className="row hero2" background="#eeebd3" height="45rem">
        <div className=" col-lg-4 col-md-6 altbox1 ">1</div>
        <div className=" col-lg-4 col-md-6  ">
          <Heading2>Property Consultation</Heading2>
          <Word>
            Real estate decisions can be complicated, so it is essential to take
            an informed approach. With our Full Consultation service, you can
            count on us to guide you through every step of the process.
          </Word>
        </div>
        <div className=" col-lg-4 col-md-6 altbox2 "></div>
        <div className=" col-lg-4 col-md-6  ">
          <Heading2>Property Construction</Heading2>
          <Word>
            Property Construction can be time-consuming, and require the
            intervention of experts. We have partnered with a construction
            company that can build your residential or commercial property from
            scratch to finish.
          </Word>
        </div>
        <div className=" col-lg-4 col-md-6  altbox3 ">5</div>
        <div className=" col-lg-4 col-md-6  ">
          <Heading2>Property Sales</Heading2>
          <Word>
            Across Lagos, Nigeria, we have a rich portfolio of lands and houses
            for sale, some from real estate developers and others from verified
            individuals. Properties varying from luxury to affordable are
            available, with a payment plan to suit Your budget.
          </Word>
        </div>
      </Container>
      <Container className="row" background="#042a13" height="7rem"></Container>

      <Container className="row hero3" height="45rem" background="#eeebd3">
        <div className="col-lg-6">
          <img src="/images/Ambience_realty_boss.jpeg" alt="CEO" />
        </div>
        <div className=" col-lg-6">
          <Getintouch />
        </div>
      </Container>
    </div>
  );
}

export default Home;
