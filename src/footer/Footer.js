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
  FOOTER_INFORMATION_CONSTANTS,
} from "./footerUtils";
import { useStyles } from "./footerStyles";

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
              {FOOTER_INFORMATION_CONSTANTS.map((ele) => (
                <Typography className={classes.footerTypography}>
                  {ele.label}
                </Typography>
              ))}
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
