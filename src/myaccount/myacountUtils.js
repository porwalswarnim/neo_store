import { Typography } from "@material-ui/core";
import React from "react";

export const MYACCOUNT_HEADING = () => {
  return (
    <Typography
      style={{
        marginTop: "80px",
        fontSize: "40px",
        marginLeft: "80px",
        fontWeight: "bold",
      }}
    >
      My Account
    </Typography>
  );
};

export const PROFILE_HEADING = () => {
  return (
    <Typography
      component="h1"
      variant="h4"
      style={{
        marginTop: "10px 10px",
        marginLeft: "10px",
        paddingBottom: "10px",
        fontSize: "40px",
        fontWeight: "bold",
        borderBottom: "1px solid #71606026",
      }}
    >
      Profile
    </Typography>
  );
};

export const PROFILE_LABEL_CONSTANTS = [
  {
    label: "First Name",
  },
  {
    label: "Last Name",
  },
  {
    label: "Gender",
  },
  {
    label: "Date of Birth",
  },
  {
    label: " Mobile Number",
  },
  {
    label: "Email",
  },
];

export const ADDRESS_HEADING = () => {
  return (
    <Typography
      component="h1"
      variant="h4"
      style={{
        marginTop: "10px 10px",
        marginLeft: "10px",
        paddingBottom: "10px",
        fontSize: "40px",
        fontWeight: "bold",
      }}
    >
      Addresses
    </Typography>
  );
};

export const CHANGE_PASSWORD_HEADING = () => {
  return (
    <Typography
      component="h1"
      variant="h3"
      style={{
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
        borderBottom: "1px solid #d8cbcb",
      }}
    >
      Change Password
    </Typography>
  );
};

export const ADD_NEW_ADDRESS_HEADING = () => {
  return (
    <Typography
      component="h1"
      variant="h4"
      style={{
        marginTop: "10px 10px",
        marginLeft: "10px",
        paddingBottom: "10px",
        fontSize: "40px",
        fontWeight: "bold",
        borderBottom: "1px solid #71606026",
      }}
    >
      Add New Address
    </Typography>
  );
};
export const MAX_100_HEADING = () => {
  return (
    <Typography
      style={{
        textAlign: "left",
        fontSize: "15px",
        marginLeft: "39px",
      }}
    >
      Max 100 characters
    </Typography>
  );
};

export const EDIT_HEADING = () => {
  return (
    <Typography
      component="h1"
      variant="h4"
      style={{
        marginTop: "10px 10px",
        marginLeft: "10px",
        paddingBottom: "10px",
        fontSize: "40px",
        fontWeight: "bold",
        borderBottom: "1px solid #71606026",
      }}
    >
      Edit Address
    </Typography>
  );
};
