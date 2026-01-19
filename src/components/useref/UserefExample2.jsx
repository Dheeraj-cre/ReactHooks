// Storing Value Without Re-render

import { useRef } from "react";

function Counter() {
  const countRef = useRef(0);

  const increase = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return <button onClick={increase}>Increase</button>;
}

export default Counter;
