import React, { useState, useContext } from "react";
import Axios from "axios";
import { loggContext } from "./context";

export default function Settings() {
  const { userID } = useContext(loggContext);

  const [data, setData] = useState({ userID });
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);

  const getValue = (e) => {
    setSuccess(false);
    setWarning(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setSuccess(false);
    console.log("request send", data);
    Axios({
      method: "POST",
      url: "http://localhost:3500/users/update",
      data: data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          setSuccess(true);
          // e.target.reset();
        } else {
          setWarning(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h2 className="display-4 text-info py-3 text-left">Change Password</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Current Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onInput={getValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">New Password</label>
          <input
            type="password"
            name="newPassword"
            className="form-control"
            id="exampleInputPassword1"
            onInput={getValue}
          />
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-success btn-lg">
            Save
          </button>
        </div>
      </form>
      {success ? (
        <div className="alert-success m-3 p-3">Your password was changed</div>
      ) : null}
      {warning ? (
        <div className="alert-danger m-3 p-3">
          Your password could not be changed, please make sure you are using
          correct current password
        </div>
      ) : null}
    </div>
  );
}
