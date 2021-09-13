import React from "react";
import FacebookLogin from "react-facebook-login";

class FacebookLoginButton extends React.Component {
  responseFacebook(response) {
  }

  render() {
    return (
      <button
        style={{
          backgroundColor: "#4c69ba",
          borderRadius: "8px",
          width: "400px",
          padding: "5px",
          fontSize: "30px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          marginTop: "60px" ,
        }}
      >
        <FacebookLogin
          appId="1088597931155576"
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
        />
      </button>
    );
  }
}

export default FacebookLoginButton;
