import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { EmailShareButton, EmailIcon } from "react-share";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  DescriptionBox: {
    fontSize: "20px",
  },
  socialMediaButton: {
    marginLeft: "20px",
    borderRadius: "10px",
  },
}));
const DescriptionShareDetails = (props) => {
  const classes = useStyles(props);
  return (
    <Grid item container row>
      <FacebookShareButton
        url={"http://www.camperstribe.com"}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe"
        className={classes.socialMediaButton}
      >
        <FacebookIcon size={50} style={{ borderRadius: "40px" }} />
      </FacebookShareButton>
      <TwitterShareButton
        url={"http://www.camperstribe.com"}
        title={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe"
        className={classes.socialMediaButton}
      >
        <TwitterIcon size={50} style={{ borderRadius: "40px" }} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={"http://www.camperstribe.com"}
        title={"CampersTribe - World is yours to explore"}
        separator=":: "
        className={classes.socialMediaButton}
      >
        <WhatsappIcon size={50} style={{ borderRadius: "40px" }} />
      </WhatsappShareButton>
      <EmailShareButton
        url={"http://www.camperstribe.com"}
        quote={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe"
        className={classes.socialMediaButton}
      >
        <EmailIcon size={50} style={{ borderRadius: "40px" }} />
      </EmailShareButton>
      <LinkedinShareButton
        url={"http://www.camperstribe.com"}
        title={"CampersTribe - World is yours to explore"}
        hashtag="#camperstribe"
        className={classes.socialMediaButton}
      >
        <LinkedinIcon size={50} style={{ borderRadius: "40px" }} />
      </LinkedinShareButton>
    </Grid>
  );
};

export default DescriptionShareDetails;
