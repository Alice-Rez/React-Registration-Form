import React, { useState } from "react";

export default function Login(props) {
  const [data, setData] = useState({});

  return (
    <div className="container">
      <h2 className="display-4 text-info py-3 text-left">Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="mail"
            name="mail"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onInput={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="pwd"
            name="pwd"
            className="form-control"
            id="exampleInputPassword1"
            onInput={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
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
          <button
            type="submit"
            className="btn btn-success btn-lg"
            onClick={(e) => {
              e.preventDefault();
              props.users.map((user) => {
                console.log(user.mail, user.pwd);
                if (user.mail === data.mail && user.pwd === data.pwd) {
                  console.log("condition is true");
                  props.setIsLogged(true);
                  props.setLoggedUser(user.name);
                }
                return "";
              });
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
