import { Grid, makeStyles } from "@material-ui/core";

import useWebAnimations, { fadeInLeft } from "@wellyshen/use-web-animations";

import React from 'react';

import { Link } from 'react-router-dom';

import Footer from './Footer';
//import Team from './Team';

const useStyles = makeStyles({
  text: {
    "marginLeft": "auto",
    "marginRight": "auto",
    "marginTop": "50px"

  },
  image: {
    "marginRight": "auto",
    "marginTop": "50px",
    "marginBottom": "50px",
    "marginLeft": "auto"
  }
})

function Common({ name, visit, btname }) {
  const { ref } = useWebAnimations({
    keyframes: [
      { "transform": "translateY(20px)" },
      { "transform": "translateY(0px)" },
    ],
    timing: {
      duration: 1000,
      direction: "alternate",
      iterations: Infinity,
    }
  })

  const { ref: ref1 } = useWebAnimations({ ...fadeInLeft });

  const classes = useStyles();
  return (
    <div className="aboutPage">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={5} className={classes.text} >
          <h1 ref={ref1}>{name}<br /><strong>About <Link to="/" className="about" >Shoe-Point</Link></strong></h1>
          <p className="Summery">The “Shoe Point” has been developed to override the problems prevailing in the practicing manual system. This
            Application is supported to eliminate and in some cases  reduce hardship faced by this existing system. Moreover
            This system is designed for the particular need of the company to carry out operations in a smooth and effective  manner.’
          </p><p>
            Shoe Point as describe above ,can lead to error free ,secure, reliable and fast management system.
            Firstly user see different style shoe then User add to cart items . if user buy first login then payment method then order confirmed.
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={5} className={classes.image}>
          <img ref={ref} src="/images/About-Img.png" alt="web dev" border="0" width="600" height="300" />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Common;