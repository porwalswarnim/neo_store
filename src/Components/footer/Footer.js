import {
  Button,
  Grid,
  Box,
  Container,
  Typography,
  TextField,
  AppBar,
} from "@material-ui/core";
import React from "react";
import {
  FOOTER_ABOUT_CONSTANTS,
  COPY_RIGHT_TEXT,
} from "./footerUtils";
import { useStyles } from "./footerStyles";

/**
 * @author Swarnim Porwal
 * @description this method contains Footer for a whole project
 * @returns JSX for Footer
 */
export default function Footer(props) {
  const classes = useStyles(props);
  return (
    <Grid>
      <AppBar position="static" className={classes.footer}>
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.headingFooter}>
                  About Company
                </Typography>
              </Box>
              {FOOTER_ABOUT_CONSTANTS.map((ele) => (
                <Typography className={classes.footerTypography}>
                  {ele.label}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.headingFooter}>
                Information
              </Typography>
              <Typography
                onClick={() =>
                  window.open("https://www.neosofttech.com/terms-use", "_blank")
                }
                className={classes.footerTypography}
              >
                Terms and Conditions
              </Typography>
              <Typography
                onClick={() =>
                  window.open(
                    "https://careers.neosofttech.com/terms-of-use",
                    "_blank"
                  )
                }
                className={classes.footerTypography}
              >
                Guarantee and Return Policy
              </Typography>
              <Typography
                onClick={() =>
                  window.open(
                    "https://www.neosofttech.com/contact-us",
                    "_blank"
                  )
                }
                className={classes.footerTypography}
              >
                Contact Us
              </Typography>
              <Typography
                onClick={() =>
                  window.open(
                    "https://www.neosofttech.com/privacy-policy",
                    "_blank"
                  )
                }
                className={classes.footerTypography}
              >
                Privacy Policy
              </Typography>
              <Typography
                onClick={() =>
                  window.open(
                    "https://www.neosofttech.com/global-presence",
                    "_blank"
                  )
                }
                className={classes.footerTypography}
              >
                Locate Us
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.headingFooter}>
                Newsletter
              </Typography>
              <Typography className={classes.footerTypography}>
                {COPY_RIGHT_TEXT}
              </Typography>
              <TextField
                className={classes.emailInput}
                placeholder="your email..."
              />
              <br />
              <Button
                style={{ marginTop: "15px" }}
                className={classes.buttonSubscribe}
                type="button"
                variant="contained"
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
          <Typography variant="body1" className={classes.copyRightText}>
            {COPY_RIGHT_TEXT}
          </Typography>
        </Container>
      </AppBar>
    </Grid>
  );
}
