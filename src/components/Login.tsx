
import React,{useState,useEffect} from 'react'

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

<div>
<h1>Login</h1>

<input type="text"
name="userName" 
value={myState.userName} 
onChange={handleStateChange}
/>

<input type="password"
name="password" 
value={myState.password} 
onChange={handleStateChange}
/>
</div>
	)
}