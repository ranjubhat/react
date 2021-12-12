import React from "react";

function AsyncAwaitComponent(props) {
  const registerPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //reject("error");
        resolve("Hii");
        console.log("register promise");
      }, 1000);
    });
  };

  const sendMailPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve();
        console.log("sendMail promise");
      }, 1000);
    });
  };
  const loginPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        console.log("Login promise");
      }, 1000);
    });
  };

  const authenticate = async () => {
    try {
     let a= await registerPromise();
      await sendMailPromise();
      await loginPromise();
      console.log(a)
    } catch (error) {
      throw new Error("Its error bro");
    }
  };
  authenticate()
    .then(() => console.log("All Set"))
    .catch((error) => console.log(error));
  return (
    <div>
      <h1>Async Await</h1>
    </div>
  );
}

export default AsyncAwaitComponent;
