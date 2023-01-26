import React from "react";
import { Container } from "../components/container";

function Properties() {
  return (
    <div class="container-fluid">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="/images/Dukia-Africa.jpg"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>This is the largest resort estate in Africa.</h5>
              <p>You don't want to miss out on this...</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="/images/Skyleads_court.jpg"
              alt="Second slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <Container className=" row property" background="#eeebd3" height="40rem">
        <div className="products row">
          <div className="col-lg-6">
            <img src="/images/dukia.jpeg" alt="dukia " />
          </div>
          <div className="description col-lg-6">
            <h3>Dukia Africa</h3>
            <p>
              This is the largest resort estate in Africa, located at sala, Epe,
              Lagos state. Title: C of O, Features of the estate include a golf
              course, helipad, zoo, recreational faciities, perimeter fencing ,
              good road network, and lots more.
              <br />
              <br /> When you make an initial balance of 3,500.000 you can
              spread out the remaining.
            </p>
            <p>300SQM = N15,000,000</p>
            <p>500SQM = N22,000,000</p>
            <p>Initial Deposit = N3,500,000</p>
          </div>
        </div>
        <div className="products row">
          <div className="col-lg-6">
            <img src="/images/skyleads.jpg" alt="Skylead " />
          </div>
          <div className="description col-lg-6">
            <h3>Skyleads Court</h3>
            <p>
              A place where you can enjoy the pride and prestige of ownership.
              Skylead Court is a wise investment decision, the easier and
              fastest way to secure your tomorrow at an affordable, competitive
              yet pocket-friendly price. <br />
              <br /> Skylead Homes Limited brings to you an estate that can
              deliver such purpose. Skylead Court is less than 1 min away from
              the main Ketu Epe expressway.
            </p>
            <p>500SQM = N1,200,000 in the space of 3 months</p>

            <p>300SQM = N750,000 in the space of 3 months</p>
            <p>Initial Deposit = N350,000</p>
          </div>
        </div>
      </Container>

      <Container className="Inquire row" background="#042a13" height="6rem">
        <h4>For Inquiries on all properties, Call: +2348102756932</h4>
      </Container>
      <Container
        className="row"
        background="#eeebd3"
        height=".5rem"
      ></Container>
    </div>
  );
}

export default Properties;
