import { Grid, Typography, Button } from "@material-ui/core";
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
import { useSelector } from "react-redux";

/**
 * @author Swarnim Porwal
 * @description this method gets the exsisting profile data and show them in to the profile section
 * @returns JSX for Profile Screen
 */
const ProfilePage = (props) => {
  const isLoggedIn = useSelector(state => state.isLoggedIn['0'])
  const classes = useStyles(props);
  const [formData, setFormData] = useState({
    firstname: isLoggedIn.firstName,
    lastname: isLoggedIn.lastName,
    gender: isLoggedIn.gender,
    dateofbirth: isLoggedIn.createdAt,
    mobilenumber: isLoggedIn.mobile,
    Email: isLoggedIn.email,
  });
  const [isEdit, setIsEdit] = useState(false);

  const EditHandler = (e) => {
    setIsEdit(true);
  };

  const SaveHandler = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  return (
    <div>
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
    </div>
  );
};

export default ProfilePage;
