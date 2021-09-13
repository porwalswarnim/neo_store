import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const useStyles = makeStyles(() => ({
  DescriptionBox: {
    paddingBottom: "10px",
    marginLeft: "30px",
    backgroundColor: "white",
    width: "100px",
    fontWeight: "bold",
    
  },
}));
const DescriptionDetails = (props) => {
  const classes = useStyles(props);
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <Button
            className={classes.DescriptionBox}
            {...bindTrigger(popupState)}
          >
            {" "}
            Description
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={2} style={{ borderTop: "1px solid gray" }}>
              <Typography>
                A description paragraph is required when you are asked to write
                about how something looks, sounds, smells, tastes or feels. You
                should provide specific details of the most important features
                and use appropriate adjectives to describe attributes and
                qualities.
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default DescriptionDetails;
