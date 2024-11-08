
import React,{useState,useEffect} from 'react'
import "./login.css"
export const Login=()=>{

const [myState,setState]= useState({
	userName:"",
	password:""
})	

const handleStateChange=(e:any)=>{

const {name,value} = e.target

setState((prevState:any)=>({
	...prevState,[name]:value}
)) 
}

	return (

<div className="login-main">
<h1>Login</h1>

<input className='input-feilds' type="text"
name="userName" 
value={myState.userName} 
onChange={handleStateChange}
/>

<input className='input-feilds' type="password"
name="password" 
value={myState.password} 
onChange={handleStateChange}
/>
</div>
	)
}