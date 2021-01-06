import Axios from "axios";
import React, { useState } from "react";

export default function RegisterFunction() {
  const [data, setData] = useState({});
  let [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");

  const getValue = (e) => {
    setSuccess(false);
    setWarning(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    Axios({
      method: "POST",
      url: "/users/register",
      data: data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.code === 11000) {
          setWarningContent(Object.keys(res.data.keyValue)[0]);
          setWarning(true);
        } else {
          console.log(res);
          setSuccess(true);
        }
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <form className="container" onSubmit={submit}>
      <h2 className="display-4 text-info py-3 text-left">Registration</h2>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="name"
          className="form-control"
          onInput={getValue}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mail">E-mail</label>
        <input
          type="email"
          name="email"
          id="mail"
          required
          className="form-control"
          onInput={getValue}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">User name</label>
        <input
          type="text"
          name="uname"
          id="date"
          required
          className="form-control"
          onInput={getValue}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          name="password"
          id="pwd"
          required
          className="form-control"
          onInput={getValue}
        />
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-success btn-lg">
          Register
        </button>
      </div>
      {warning ? (
        <div className="alert-danger m-3 p-3">
          User with this {warningContent} already exists, please log-in
        </div>
      ) : null}
      {success ? (
        <div className="alert-success m-3 p-3">
          You were successfully registered. Please proceed with log-in.
        </div>
      ) : null}
    </form>
  );
}
