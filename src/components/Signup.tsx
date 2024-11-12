import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./signup.css";
type UserFields = {
  name: string;
  gender: string;
  userName: string;
  password: string;
  userImage?: HTMLImageElement;
};

export const Signup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userFields, setFields] = useState<UserFields>({
    name: "",
    gender: "",
    password: "",
    userName: "",
    userImage: undefined,
  });

  const handleUserData = (e: any) => {
    const { name, value, type } = e.target;
    const newVal =
      type === "file"
        ? e.target.files.length > 0
          ? e.target.files[0]
          : null
        : value;

    setFields((prevState) => ({
      ...prevState,
      [name]: newVal,
    }));
  };

  const submitHandle = () => {
    console.log(userFields);
    // sets the loading to true
    setLoading((prevState) => !prevState);
    const formData = new FormData();
    formData.append("name", userFields.name);
    formData.append("gender", userFields.gender);
    formData.append("userImage", userFields.userImage);
    formData.append("username", userFields.userName);
    formData.append("password", userFields.password);

    axios
      .post("http://127.0.0.1:8000/signup/", formData)
      .then((res) => {
        setLoading(false);
        console.log(res);
        localStorage.setItem("response", res.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return loading ? (
    "Loading"
  ) : (
    <div className="signup-main">
      <div className="signup-nav">
        <div className="signup-logo">
          <img src="/arrow.png" alt="logo" />
          <span>Logo</span>
        </div>
        <div>
          Have an account?
          <NavLink className="signup-green" to={"/login"}>
            Sign in!
          </NavLink>
        </div>
      </div>

      <div className="signup-body">
        {/* Start of signup inner */}
        <div className="signup-inner">
        <div className="signup-Header">
              <h1>Get Started With ____</h1>
              <h6>Getting started is easy</h6>
            </div>
          
            <div className="signup-authButton-wrapper">
              <button className="signup-authButton">
                <img src="/google.png" alt="Google img" />

                <span style={{ marginLeft: "10px" }}>Google</span>
              </button>
              <span style={{ width: "20px" }}></span>
              <button className="signup-authButton">
                <img src="/facebook.png" alt="Facebook img" />
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </button>
            </div>
            <div className="signup-or-text">
              <span
                style={{
                  position: "absolute",
                  top: "-7px",
                  left: "40%",
                  backgroundColor: "white",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  fontSize: "14px",
                  color: "#000000",
                }}
              >
                Or continue With
              </span>
              <div
                style={{
                  width: "400px",
                  height: "0.5px",
                  backgroundColor: "#DBDBDB",
                }}
              ></div>
            </div>
          
          <input
            className="signup-inptex"
            type="text"
            name="name"
            placeholder="Name"
            value={userFields.name}
            onChange={handleUserData}
          />
             <div>
            <label>
              <input
                className="signup-inptex"
                type="text"
                placeholder="User Name"
                name="userName"
                value={userFields.userName}
                onChange={handleUserData}
              />
            </label>
          </div>
          <div>
            <input
              className="signup-inptex"
              type="password"
              name="password"
              placeholder="Password"
              value={userFields.password}
              onChange={handleUserData}
            />
          </div>

          <div>
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleUserData}
                checked={userFields.gender === "Male"}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleUserData}
                checked={userFields.gender === "Female"}
              />
              Female
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleUserData}
                checked={userFields.gender === "Other"}
              />
              Other
            </div>
          </div>
       

          <label>
            Image
            <input type="file" name="userImage" onChange={handleUserData} />
          </label>
          <div>
            <button className="signup-signupbtn" onClick={submitHandle}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* End of signup inner */}
    </div>
  );
};
