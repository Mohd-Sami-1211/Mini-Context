import React,{useState,useContext} from "react";
import UserContext from "../Context/UserContext";
function Profile(){
    const{User}=useContext(UserContext)
     if(!User) return <div>Please Login</div>
     return <div>Welcome {User.Username}</div>


}
export default Profile