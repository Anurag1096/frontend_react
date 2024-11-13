import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";
export const Login = () => {
  const [myState, setState] = useState({
    userName: "",
    password: "",
  });
  const [active,setActive]=useState<boolean>(false)
  const {loading,user,error}= useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const handleStateChange = (e: any) => {
    const { name, value } = e.target;
     
    setState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleActive=()=>{
	setActive(!active)
}

const handleLogin=(e: React.FormEvent)=>{
  e.preventDefault();
  dispatch(loginUser(myState))
}

  return (
    <>
      <div className="login-main">
        <div className="login-nav">
          <div className="login-logo">
            <img src="/arrow.png" alt="logo" />
            <span>Logo</span>
          </div>
          <div>
            Don’t have an account? 
				<NavLink className="login-green" to={"/signup"}>
				Sign up!
					</NavLink>
				
          </div>
        </div>

        <div className="login-body">
          {/* This is the inner section of the login form : start */}
          <div className="login-inner">
            <div className="login-Header">
              <h1>Welcome Back!</h1>
              <h6>Login into yout account</h6>
            </div>

            <div className="login-authButton-wrapper">
              <button className="login-authButton">
                <img src="/google.png" alt="Google img" />

                <span style={{ marginLeft: "10px" }}>Google</span>
              </button>
              <span style={{ width: "20px" }}></span>
              <button className="login-authButton">
                <img src="/facebook.png" alt="Facebook img" />
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </button>
            </div>
            <div className="login-or-text">
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
             <form onSubmit={handleLogin}>
            <div className="input-container">
              <input
                className="input-feilds"
                type="text"
                name="userName"
                placeholder="User Name"
                value={myState.userName}
                onChange={handleStateChange}
              />
            </div>

            <div className="input-container">
              <input
                className="input-feilds"
                type="password"
                name="password"
                placeholder="Password"
                value={myState.password}
                onChange={handleStateChange}
              />
            </div>

			<div className="login-recv">
				<div onClick={handleActive} className={active?`login-active`:"login-dissable"}> 
					
					<div className={active?`login-circle-1`:`login-circle-2`}></div>
				    
				</div>

				<div style={{color:"red", fontSize:"14px", }}>Recover password</div>
			</div>

			<div>
				<button type="submit" className="login-loginbtn">Log in</button>
			</div>
      </form>
            {/* End */}
          </div>
        </div>
      </div>
    </>
  );
};
