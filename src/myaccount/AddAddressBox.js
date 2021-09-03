import { Box,  Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./addAddressStyles";
import { useDispatch } from "react-redux";
  import axios from "axios";
const AddAddressBox = ({ data, fetchAddress }) => {
    const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteAddressHandler = async () => {
    var config = {
      method: "delete",
      url: `https://neostore-api.herokuapp.com/api/user/address/${data._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization : localStorage.getItem("token")
      },
    };
    try {
      await axios(config);
      const message = 'Address Deleted successfully';
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { type: "success", message, open: true },
      });
      fetchAddress();
    } catch (error) {
      const message= "Something went Wrong";
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { type: "error", message, open: true },
      });
    }
  };
    return(
        <Box display="flex" p={1} boxShadow={7} className={classes.boxCSS}>
        <Box p={1} flexGrow={1}>
          <Typography className={classes.addressTypography}>
            {data.addressLine}
          </Typography>
          <Typography className={classes.addressTypography}>
          {data.city} - <span>{data.pincode}</span>
          </Typography>
          <Typography className={classes.addressTypography}>
          {data.state}, {data.country}
          </Typography>

          <Button
            variant="contained"
            onClick={() => history.push(`/editAddress/${data._id}`)}
            color="primary"
            className={classes.EditButtonCSS}
          >
            Edit
          </Button>
        </Box>
        <Box p={1}>
          <IconButton
            type="submit"
            onClick={deleteAddressHandler}
          >
            <CloseIcon className={classes.closeIconCSS} />
          </IconButton>
        </Box>
      </Box>
    )
}

export default AddAddressBox;