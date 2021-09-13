import React,{useState} from "react";
import {
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";


export const RatingStar = () =>{
    const [starValue, setStarValue] = useState(2);
    return(

<Box
component="fieldset"

style={{ marginLeft: "125px" }}
borderColor="transparent"
>
<Rating
  name="simple-controlled"
  
  value={starValue}
  onChange={(event, newValue) => {
    setStarValue(newValue);
  }}
/>
</Box>
    )
}