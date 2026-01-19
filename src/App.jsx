import React from "react";
import UseState from "./components/UseState.jsx";
import Example1 from "./components/useeffects/Example1.jsx";
import Example2 from "./components/useeffects/Eample2.jsx";
import Example3 from "./components/useeffects/Example3.jsx";
import Example4 from "./components/useeffects/Example4.jsx";
import Example5 from "./components/useeffects/Example5.jsx";
import UseMemo from "./components/usememo/UseMemo1.jsx";
import UseMemo2 from "./components/usememo/UseMemo2.jsx";
import UserefExample1 from "./components/useref/UserefExample1.jsx";
import UserefExample2 from "./components/useref/UserefExample2.jsx";
import UserefExample3 from "./components/useref/UserefExample3.jsx";

function App() {
  return (
    <div>
      
      <UseState />
      <Example1 />
      <Example2 />  
      <Example3 />
      <Example4 />
      <Example5 />
      <UseMemo />
      <UseMemo2 />
      <UserefExample1 />
      <UserefExample2 />
      <UserefExample3 />
      
      {/* <UseMemo /> */}
    </div>
  );
}

export default App;