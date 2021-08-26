import { Grid, Typography, Button } from "@material-ui/core";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import LeftSideBar from "./LeftSideBar";
import React, { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { useStyles } from "./profileStyles";
import {
  MYACCOUNT_HEADING,
  PROFILE_HEADING,
  PROFILE_LABEL_CONSTANTS,
} from "./myacountUtils";

const ProfilePage = (props) => {
  const classes = useStyles(props);
  const [formData, setFormData] = useState({
    firstname: "Swarnim",
    lastname: "Porwal",
    gender: "male",
    dateofbirth: "04/01/1999",
    mobilenumber: "912742742",
    Email: "swarnimporwal.com",
  });
  const [isEdit, setIsEdit] = useState(false);

  const EditHandler = (e) => {
    setIsEdit(true);
  };

  const SaveHandler = (e) => {
    e.preventDefault();
    setIsEdit(false);
    console.log("formdata", formData);
  };

  return (
    <div>
      <Header />
      <MYACCOUNT_HEADING />
      <Grid item container className={classes.MainGrid} row xs={12}>
        <Grid xs={3}>
          <LeftSideBar />
        </Grid>
        <Grid xs={9} className={classes.RightSideBarCSS}>
          <Grid item className={classes.registerBoxGrid}>
            <PROFILE_HEADING />
            <form className={classes.form}>
              <Grid item container column xs={12}>
                <Grid xs={3}>
                  {PROFILE_LABEL_CONSTANTS.map((ele) => (
                    <Typography className={classes.labelName}>
                      {ele.label}
                    </Typography>
                  ))}
                </Grid>
                <Grid xs={9} row container item>
                  <OutlinedInput
                    className={classes.inputFieldProfile}
                    value={formData.firstname}
                    disabled={!isEdit}
                    type="text"
                    onInput={(e) =>
                      setFormData({ ...formData, firstname: e.target.value })
                    }
                  />
                  <OutlinedInput
                    className={classes.inputFieldProfile}
                    value={formData.lastname}
                    type="text"
                    disabled={!isEdit}
                    onInput={(e) =>
                      setFormData({ ...formData, lastname: e.target.value })
                    }
                  />
                  <OutlinedInput
                    value={formData.gender}
                    className={classes.inputFieldProfile}
                    type="text"
                    disabled={!isEdit}
                    onInput={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  />
                  <OutlinedInput
                    value={formData.dateofbirth}
                    className={classes.inputFieldProfile}
                    type="text"
                    disabled={!isEdit}
                    onInput={(e) =>
                      setFormData({ ...formData, dateofbirth: e.target.value })
                    }
                  />
                  <OutlinedInput
                    value={formData.mobilenumber}
                    className={classes.inputFieldProfile}
                    type="text"
                    disabled={!isEdit}
                    onInput={(e) =>
                      setFormData({ ...formData, mobilenumber: e.target.value })
                    }
                  />
                  <OutlinedInput
                    value={formData.Email}
                    className={classes.inputFieldProfile}
                    type="text"
                    disabled={!isEdit}
                    onInput={(e) =>
                      setFormData({ ...formData, Email: e.target.value })
                    }
                  />
                </Grid>
              </Grid>

              {!isEdit && (
                <Button
                  className={classes.editButton}
                  startIcon={<EditIcon style={{ fontSize: "30px" }} />}
                  onClick={EditHandler}
                >
                  Edit
                </Button>
              )}
              {isEdit && (
                <Button
                  className={classes.saveButton}
                  startIcon={<SaveIcon style={{ fontSize: "30px" }} />}
                  onClick={SaveHandler}
                >
                  Save
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default ProfilePage;
