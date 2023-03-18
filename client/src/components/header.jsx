import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useHistory } from 'react-router-dom';
import { AnimateOnChange } from 'react-animation'
import CustomSlider from './Slider';
const tutorialSteps = [
  {
    label: 'New Style shoes',
    imgPath:
      '/images/bg_img-2.jpg',
  },
  {
    label: 'New Mens styling shoes',
    imgPath:
      '/images/img_bg_3.jpg',
  },
  {
    label: ' Women Shoes',
    imgPath:
      '/images/bg-Img_6.jpg',
  },
  {
    label: 'Best Collection',
    imgPath:
      '/images/bg_img-4.jpg',
  },
  {
    label: 'New Design',
    imgPath:
      '/images/bg-Img_5.jpg',
  },
  {
    label: 'Mens Sneakers ',
    imgPath:
      '/images/img_bg_8.jpg',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    cursor: 'pointer',

  },
  header: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 40,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    marginTop: '20px',
    maxHeight: '550px',
    maxWidth: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    display: 'center',
    alignContent: 'center',
    marginLeft: '270px',

  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push('/product')
  }

  return (
    <div className={classes.root}>
      <CustomSlider/>
      


      {/* <Paper square elevation={0} className={classes.header}>
        <Typography style={{
          fontSize: '20px', alignItems: 'center'
          , justifyContent: 'center', display: 'flex', color: 'brown'
        }}>{tutorialSteps[activeStep].label}

        </Typography>
      </Paper> */}
      {/* <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} onClick={handleClick}></img>
            ) : null}


          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>

        }
      />

      <div className="p1">
        <p style={{ color: 'green' }}>It started with a simple idea: Create quality, well-designed products that I wanted myself.</p>
      </div> */}
    </div>
  );
}

export default Header;
