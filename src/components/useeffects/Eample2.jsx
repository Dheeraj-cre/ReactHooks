// Runs Only Once (ComponentDidMount)

import React,{ useEffect} from "react";

function Example2(){

    useEffect(() =>{
        console.log("component mounted");
    },[]); // Empty dependency array ensures this runs only once when the component mounts

    return(
        <h2>Example2 Component - Check Console for Mounting Message</h2>
    );
}
export default Example2;