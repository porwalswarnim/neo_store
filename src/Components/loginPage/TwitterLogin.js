import React from "react";
import TwitterLogin from "react-twitter-login";

const TwitterLoginButton = (props) => {
  const authHandler = (err, data) => {
  };
  const CONSUMER_KEY = "PyHxgJuyORZqhDiuKAne8LcxT";
  const CONSUMER_SECRET = "RBqOgWJfflgk2GLGmKtHFnHituqvf3vROPfAqzOPpfKficIrI9";

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={CONSUMER_KEY}
      consumerSecret={CONSUMER_SECRET}
    />
  );
};

export default TwitterLoginButton;
