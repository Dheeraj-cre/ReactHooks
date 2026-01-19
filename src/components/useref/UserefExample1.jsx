// Accessing DOM Elements (Most Common Use)

import { useRef } from "react";

function App() {
  const inputRef = useRef(null); // create reference

  const focusInput = () => {
    inputRef.current.focus(); // access DOM element
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
