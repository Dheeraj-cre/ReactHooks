// Runs on Every Render

import React,{ useState,useEffect } from "react";

function Example1() {
    const [count, setcount] = useState(0);

    useEffect(() =>{
        console.log("component mounted or update");
    })
    return (
        <div>
            <h2>Example1 Component</h2>
            <p>Count: {count}</p>
            <button onClick={() => setcount(count + 1)}>Increment</button>
        </div>
    )
}
export default Example1;