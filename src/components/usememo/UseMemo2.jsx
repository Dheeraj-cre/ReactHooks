import React, { useState, useMemo } from "react";

function WithMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const result = useMemo(() => {
    console.log("Slow function chal rahi hai...");
    for (let i = 0; i < 1000000000; i++);
    return count * 2;
  }, [count]);

  return (
    <>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>+</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default WithMemo;
