import { useState } from "react"; // Importing useState hook from React

// Functional component named UseState
function UseState() {
    // Declaring a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Rendering the component
    return (    
    <div>
      <h2>UseState Component</h2>
        {/* // Displaying the current count and a button to increment it */}
      <p>Count: {count}</p>
      {/* // Button to increment the count */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={()=> setCount(count -1)}>Decrement</button>
        </div>
  );
}
export default UseState;
        