import React from "react";

import { makeStyles, Box, Typography, IconButton } from "@material-ui/core";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";
import GitHubIcon from '@material-ui/icons/GitHub';
import Badge from '@material-ui/core/Badge';
import { Facebook, Twitter, Instagram, WhatsApp } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "linear-gradient(to right top, #878e99, #7ca6b5, #71bfbc, #8ad4aa, #c7e18d)",
    minHeight: "500px",
    padding: "20xp",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarColumn: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    "& img": {
      width: "100%",
      margin: "auto",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      maxWidth: "350px",
      borderRadius: "50%",
      border: "10px double #ffffff",
      overflow: "hidden",
    },
    "& p": {
      fontSize: "20px",
      marginTop: "20px",
      marginBotton: "20px",
      fontWeight: "200",
      fontStyle: "italic",
    },
  },
}));

const Team = () => {
  const classes = useStyles();

  const { keyframes, timing } = fadeIn;
  const about = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 200,
      duration: 6000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  return (
      
<div className="">
  <h1 style={{marginLeft: '35px'}}>Team Member:</h1>
    <Box component="div" className={classes.root}>
      <Box component="div" className={classes.avatarColumn}>
        <Box component="div" className={classes.avatar}>
          <img
            src="/images/image.jpg"
            alt="profile"
            ref={about.ref}
            style={{ height: "250px", width: "250px" }}
          />
            
          <Typography component="p">
            <strong>Muhammad Tayyab</strong>
          </Typography>
         
          <Typography >
           
          <IconButton >
          <Badge  color="secondary">
            <a href="https://github.com/Muhammad-Tayyab1"><GitHubIcon/></a>
          </Badge>
        </IconButton>
        <IconButton >
          <Badge  color="secondary">
          <a href="https://web.facebook.com/profile.php?id=100031034920869"><Facebook/></a> 
          </Badge>
        </IconButton>
        <IconButton >
          <Badge  color="secondary">
          <a href="https://wa.me/qr/KZSAWNBXEXVME1"><WhatsApp/></a> 
          </Badge>
        </IconButton>
        <IconButton >
          <Badge  color="secondary">
          <a href="https://twitter.com/Muhamma45165722"><Twitter/></a> 
          </Badge>
        </IconButton>
        <IconButton >
          <Badge  color="secondary">
           <a href="https://www.instagram.com/muhammadtayyab575/?hl=en"><Instagram/></a>
          </Badge>
        </IconButton>
          </Typography>
        </Box>
      
     
          </Box>
  </Box>
   </div>
  );
};

export default Team;