// API Call using useEffect

import React,{useState,useEffect} from "react";

function User() {

    const[user,setUser]=useState([]);

    useEffect(()=>{
         fetch("https://jsonplaceholder.typicode.com/users")
         .then((res)=> res.json())
         .then((data)=> setUser(data))

    },[])
    return(
        <div>
           <h2> API Call using useEffect</h2>
           <ul>{user.map(user=>( <li key={user.id}>{user.name}</li>))}</ul>
        </div>
    );
}
export default User;