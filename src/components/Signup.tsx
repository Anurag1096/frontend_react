import React,{useState} from "react"
import "./signup.css"
type UserFields={
	name:string;
	gender:string;
	userName:string;
	userImage?:HTMLImageElement;
}

export const Signup=()=>{

 const [userFields,setFields] =useState<UserFields>({
 	name:"",
 	gender:"",
 	userName:"",
 	userImage:null,
 })

 const handleUserData=(e:any)=>{
   console.log(e.target)

   const {name,value,type}=e.target
   // We will do this code when we have checked boolean val(code not correct)
   let newVal = type === "file" ? (e.target.files.length > 0 ? e.target.files[0] : null) : value;

   
   setFields((prevState)=>({
   	...prevState,
   	[name]:newVal,
   })) 


 }  

 const submitHandle=()=>{
 	console.log(userFields)
 }

	return (
       <div className="signup-main">
       <input type ="text"
        name="name"
        autocomplete="on"
        value={userFields.name}
        onChange={handleUserData}

        />

        <input type="radio"
          name="gender"
          autocomplete="on"
          value="Male"
          onChange={handleUserData}
          checked={userFields.gender === "Male"}
            />

         <input type="radio"
         name="gender"
         autocomplete="on"
         value="Female"
         onChange={handleUserData}
         checked={userFields.gender === "Female"} />

         <input type="radio"
         name = "gender"
         autocomplete="on"
         value="Other"
         onChange={handleUserData}
         checked={userFields.gender === "Other"}/>
        <label >User Name
          <input type ="text"
          autocomplete="on"
        name="userName"
        value={userFields.userName}
        onChange={handleUserData}

        />
             
         </label>

         <label>


         Image
          <input type="file"
           name="userImage"
           onChange={handleUserData} 
          />

         </label>

         <button onClick={submitHandle}>Submit</button>
        </div>
         
		)
}