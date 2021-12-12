import React from "react";

function Callback(props) {
  const register = (callback) => {
    setTimeout(() => {
      console.log("register");
      callback();
    }, 1000);
  };

  const sendMail = (callback) => {
    setTimeout(() => {
      console.log("sendMail");
      callback();
    }, 100);
  };
  const login = () => {
    setTimeout(() => {
      console.log("login");
    }, 200);
  };
  register(() => sendMail(() => login()));
  return <div><h1>Callback</h1></div>;
}

export default Callback;
