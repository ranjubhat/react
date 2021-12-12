import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actionsContainer/actionCreators";
import { getError, getLoading, getUsers } from "../redux/selector/userSelector";

function PromiseComponent(props) {
  const users = useSelector(getUsers);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);


let a=10;
console.log(a)
  console.log(users);
  console.log(error);
  console.log(loading)

  const registerPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //reject("error");
        resolve();
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
        done();
      }, 1000);
    });
  };
  const done = () => {
    console.log("done");
  };

  // registerPromise()
  //   .then(sendMailPromise)
  //   .then(loginPromise)
  //   .then((data) => data)
  //   .catch((error) => console.log(error))
  //   .finally(console.log("finnaly"));

  return (
    <div>
      <h1>Promise</h1>
    </div>
  );
}

export default PromiseComponent;
