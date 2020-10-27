import React, { useState } from "react";

export default function RegisterFunction(props) {
  const [data, setData] = useState({});
  return (
    <form
      className="container"
      onSubmit={(e) => {
        e.preventDefault();
        props.setUsers([...props.users, data]);
        e.target.reset();
      }}
    >
      <h2 className="display-4 text-info py-3 text-left">Registration</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
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
          name="mail"
          id="mail"
          required
          className="form-control"
          onInput={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Birth date</label>
        <input
          type="date"
          name="date"
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
          name="pwd"
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
