import React, { useState, useContext } from "react";
import Axios from "axios";
import { loggContext } from "./context";

export default function Settings() {
  const { userID } = useContext(loggContext);

  const [data, setData] = useState({ userID });

  return (
    <div className="container">
      <h2 className="display-4 text-info py-3 text-left">Change Password</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("request send", data);
          Axios({
            method: "POST",
            url: "http://localhost:3500/users/update",
            data: data,
          })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.log(err));
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Current Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onInput={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">New Password</label>
          <input
            type="password"
            name="newPassword"
            className="form-control"
            id="exampleInputPassword1"
            onInput={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-success btn-lg">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
