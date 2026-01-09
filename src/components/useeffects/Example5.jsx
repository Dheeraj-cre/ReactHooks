// Cleanup Function
// Runs when prop changes

import React, { useState, useEffect } from 'react';

function Timer(){

    const[seconds, setSeconds] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds(prev=>prev + 1);
        },1000);
   

    return() =>{
        clearInterval(interval);
        console.log("Cleanup function called");
    };
     },[]);

     return(
        <h2>Timer :{seconds}</h2>
     )
}

export default Timer;