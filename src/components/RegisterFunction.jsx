import Axios from "axios";
import React, { useState } from "react";

export default function RegisterFunction(props) {
  const [data, setData] = useState({});
  return (
    <form
      className="container"
      onSubmit={(e) => {
        e.preventDefault();
        Axios({
          method: "POST",
          url: "http://localhost:3500/users",
          data: data,
        })
          .then((res) => {
            console.log("request send", data);
          })
          .catch((err) => console.log(err));
        e.target.reset();
      }}
    >
      <h2 className="display-4 text-info py-3 text-left">Registration</h2>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="name"
          required
          className="form-control"
          onInput={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
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
          onInput={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
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
          onInput={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password</label>
        <input
          type="text"
          name="password"
          id="pwd"
          required
          className="form-control"
          onInput={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-success btn-lg">
          Register
        </button>
      </div>
    </form>
  );
}
