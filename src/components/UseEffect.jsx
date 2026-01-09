import { useEffect } from "react";

function UseEffect() {
  useEffect(() => {
    console.log("UseEffect Component Mounted");
    }, []);
    return (
    <div>
      <h2>UseEffect Component</h2>
      <p>Check the console to see the useEffect message when this component mounts.</p>
    </div>
  );
}
export default UseEffect;