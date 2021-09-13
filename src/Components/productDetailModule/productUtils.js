import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";


export const SHARE_BUTTON_HEADING = () => {
    return (
        <Button style={{ fontSize: "20px" }}>
        Share
        <IconButton type="submit">
          <ShareIcon style={{ color: "black" }} />
        </IconButton>
      </Button>
    );
  };
  