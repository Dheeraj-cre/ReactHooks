// Runs When State Changes
import React,{ useState,useEffect } from "react";

function Example3() {
    const [count, setcount] = useState(0);

    useEffect(()=>{
        console.log("count",count);

    },[count]);
    return(
        <div> <h2> Runs When State Changes</h2>
        <button onClick={()=> setcount(count +1)}>count</button>
        </div>
    )

}
export default Example3;