import React from "react";
import { Link } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import useWebAnimations, { fadeInLeft } from "@wellyshen/use-web-animations";
import Footer from "./Footer";
import Team from "./Team";
import { Col, Row } from "antd";
import WhyChooseUs from "./WhyChooseUs";

const useStyles = makeStyles({
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
  },
  image: {
    marginRight: "auto",
    marginTop: "50px",
    marginBottom: "50px",
    marginLeft: "auto",
  },
});

function Common({ name, visit, btname }) {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateY(20px)" },
      { transform: "translateY(0px)" },
    ],
    timing: {
      duration: 1000,
      direction: "alternate",
      iterations: Infinity,
    },
  });

  const { ref: ref1 } = useWebAnimations({ ...fadeInLeft });

  const classes = useStyles();
  return (
    <div className="aboutPage">
      <div className="mainAbout">
        <Row>
          <Col xl={12}>
            <div className="aboutSide">
              <h1>
                About <span className="styleText">Shoe-Point</span>
              </h1>
              <p>
                360-Bazar is intended to provide convenience to both sellers and customers with their
remarkable facilities. 360-bazar is providing a platform to sellers where people withsmall business can uplift their business through power of our store. Our focus is toprovide completely secure environment to our customers by providing features of
quality assurance and live complaint
              </p>
              <p>
                360-Bazar as describe above ,can lead to error free ,secure,
                reliable and fast management system. Firstly user see different
                style shoe then User add to cart items . if user buy first login
                then payment method then order confirmed.
              </p>
            </div>
          </Col>
          <Col xl={12}>
            <img
              ref={ref}
              src="/images/About-Img.png"
              alt="web dev"
              border="0"
              width="100%"
              height="100%"
            />
          </Col>
        </Row>
      </div>
      <div className="whyChoose">
        <h2>Why Choose Us</h2>
        <WhyChooseUs />
      </div>
      <div className="whyChoose OurTeam">
        <h2>Our Team</h2>
        <Team />
      </div>

      <Footer />
    </div>
  );
}

export default Common;
