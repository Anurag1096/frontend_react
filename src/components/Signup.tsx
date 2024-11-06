import React,{useState} from "react"
import axios from "axios";
import "./signup.css"
type UserFields={
	name:string;
	gender:string;
	userName:string;
  password:string;
	userImage?:HTMLImageElement;
}

export const Signup=()=>{
 const [loading,setLoading]=useState<boolean>(false)
 const [userFields,setFields] =useState<UserFields>({
 	name:"",
 	gender:"",
  password:"",
 	userName:"",
 	userImage:undefined,
 })

 const handleUserData=(e:any)=>{
   const {name,value,type}=e.target
   const newVal = type === "file" ? (e.target.files.length > 0 ? e.target.files[0] : null) : value;
   
   setFields((prevState)=>({
   	...prevState,
   	[name]:newVal,
   })) 
 }  

 const submitHandle=()=>{
 	console.log(userFields)
  // sets the loading to true
  setLoading((prevState)=>!prevState)
   const formData = new FormData();
  formData.append("name",userFields.name)
  formData.append("gender",userFields.gender)
  formData.append("userImage",userFields.userImage)
  formData.append("username",userFields.userName)
  formData.append("password",userFields.password) 
 

axios.post("http://127.0.0.1:8000/signup/",formData)
.then((res)=>{
  setLoading(false) 
  console.log(res)

})
.catch((error)=>{
  setLoading(false)
  console.log(error)
})

 }

 return (
  loading ? "Loading" : (
    <div className="signup-main">
      <input 
        type="text"
        name="name"
        value={userFields.name}
        onChange={handleUserData}
      />
      
      <input 
        type="password"
        name="password"
        value={userFields.password}
        onChange={handleUserData}
      />
      
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

      <label>
        User Name
        <input 
          type="text"
          name="userName"
          value={userFields.userName}
          onChange={handleUserData}
        />
      </label>

      <label>
        Image
        <input 
          type="file"
          name="userImage"
          onChange={handleUserData}
        />
      </label>

      <button onClick={submitHandle}>Submit</button>
    </div>
  )
);
}