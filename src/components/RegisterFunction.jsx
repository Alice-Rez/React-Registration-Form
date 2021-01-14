import Axios from "axios";
import React, { useState } from "react";
import { FaMagento, FaUserCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function RegisterFunction() {
  const history = useHistory();

  const [data, setData] = useState({});
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [msg, setMsg] = useState({});
  let [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");

  const getValue = (e) => {
    setSuccess(false);
    setWarning(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getPhoto = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();

    setMsg({});

    let formData = new FormData();
    formData.append("file", image.raw);
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("uname", data.uname);
    formData.append("password", data.password);

    Axios({
      method: "POST",
      url: "/users/register",
      data: formData,
    })
      .then((res) => {
        console.log(res);
        if (res.data.msg) {
          let msgChanged = res.data.msg.reduce((acc, item) => {
            acc[item.param] = true;
            return acc;
          }, {});
          setMsg(msgChanged);
        } else if (res.data.code === 11000) {
          setWarningContent(Object.keys(res.data.keyValue)[0]);
          setWarning(true);
        } else {
          history.push("/log-in");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="container" onSubmit={submit} encType="multipart/form-data">
      <h2 className="display-4 text-info py-3 text-left">Registration</h2>
      <div className="image-input">
        <label htmlFor="upload-button" className="mb-3">
          {image.preview ? (
            <img
              src={image.preview}
              alt="profile-pic"
              className="rounded-circle ml-3 profile-photo"
            />
          ) : (
            <span className="ml-3 mb-4 d-flex align-items-center">
              <span>
                <FaUserCircle className="display-2" />
              </span>
              <div className="ml-3">
                <h6>Upload photo</h6>
                <small>image shall be in square format</small>
              </div>
            </span>
          )}
        </label>

        <input
          type="file"
          name="userImg"
          className="d-none"
          id="upload-button"
          onChange={getPhoto}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="name"
          className="form-control"
          onInput={getValue}
        />
        {msg.fullName ? (
          <small className="text-danger mt-1">
            Your full name shall contain just letters
          </small>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="mail">E-mail</label>
        <input
          type="text"
          name="email"
          id="mail"
          // required
          className="form-control"
          onInput={getValue}
        />
        {msg.email ? (
          <small className="text-danger mt-1">
            E-mail do not correspond to typical rules for email
          </small>
        ) : null}
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
        {msg.uname ? (
          <small className="text-danger mt-1">
            Please use just letters and numbers in your username
          </small>
        ) : null}
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
        {msg.password ? (
          <small className="text-danger mt-1">
            Your password is too short, you need at least 10 characters
          </small>
        ) : null}
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
