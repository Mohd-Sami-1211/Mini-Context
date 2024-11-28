import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
function Login(){
const[Username,SetUsername]=useState("")
const[Password,SetPassword]=useState("")

const{SetUser}=useContext(UserContext)

const handleSubmit=(e)=>{
e.preventDefault()
SetUser({Username,Password})
}
return(
    <>
      <h2>Login</h2>
      <input
      value={Username}
      onChange={(e)=>SetUsername(e.target.value)}
      type="text" placeholder="Username" />
      {"  "}
      <input
      value={Password}
      onChange={(e)=>SetPassword(e.target.value)}
      type="text" placeholder="Password" />
      {"  "}
      <button onClick={handleSubmit}>Submit</button>
    </>
)

}
export default Login