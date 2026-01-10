// without useMemo 
import React, { useState } from 'react';

function withoutUseMemo() {

    const [count, setCount]=useState(0);

    function slow(num){
        console.log("calling slow function");
        for(let i =0; i<=100000000; i++);  
        return num*1;
    }
   const result = slow(count);
    return(
        <div>
            <h2>Without useMemo </h2>
            <h2>Result: {result}</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            
        </div>
    )
}
export default withoutUseMemo;