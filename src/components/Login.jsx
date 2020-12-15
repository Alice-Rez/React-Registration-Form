import Axios from "axios";
import React, { useState } from "react";

export default function Login(props) {
  const [loginData, setData] = useState({});
  const [warning, setWarning] = useState(false);

  return (
    <div className="container">
      <h2 className="display-4 text-info py-3 text-left">Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("request send", loginData);

          Axios({
            method: "POST",
            url: "http://localhost:3500/users/login",
            data: loginData,
          })
            .then((res) => {
              if (res.data.logged) {
                props.setIsLogged(true);
                props.setLoggedUser(res.data.uname);
                props.setUserId(res.data.email);
              } else {
                setWarning(true);
              }
            })
            .catch((err) => console.log(err));
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="mail"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onInput={(e) => {
              setWarning(false);
              setData({ ...loginData, [e.target.name]: e.target.value });
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onInput={(e) => {
              setWarning(false);
              setData({ ...loginData, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-success btn-lg">
            Login
          </button>
        </div>
      </form>
      {warning ? (
        <div className="alert-danger m-3 p-3">
          {" "}
          Combination of the e-mail and password is not correct
        </div>
      ) : null}
    </div>
  );
}
