import React from "react";
import { useGoogleLogin } from "react-google-login";

const GoogleLoginButton = () => {
  const clientId = "YOUR_CLIENT-ID.apps.googleusercontent.com";
  const onSuccess = (res) => {
  };
  const onFailure = (res) => {
  };

  const { signIn } = useGoogleLogin({
    clientId,
    onSuccess,
    onFailure,
    accessType: "offline",
    isSignedIn: true,
  });
  return (
    <div>
      <button
        onClick={signIn}
        style={{
          backgroundColor: "#f5472bd1",
          borderRadius: "8px",
          width: "400px",
          padding: "15px",
          fontSize: "30px",
          color: "white",
          fontWeight: "bold",
          marginTop:'40px',
          marginBottom:'40px',
          cursor: "pointer",
        }}
      >
        LOGIN WITH GOOGLE
      </button>
    </div>
  );
};
export default GoogleLoginButton;
