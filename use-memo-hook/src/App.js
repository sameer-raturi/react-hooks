import React, { useState, useMemo } from "react";
import "./App.css";

const slowFunction = (number) => {
  for (let i = 0; i < 1e9; i++) {}
  return 2 * number;
};

function App() {
  const [number, setNumber] = useState();
  const [dark, setDark] = useState(true);
  const doubleNumber = useMemo(() => {
    // as we have memoized this so this func won't run on the chnage of state dark
    // this useMemo will only compare with the last dependency array so 2 -> 23 -> 2
    // the function still runs
    console.log(number);
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  const handleOnClick = () => {
    setDark((prev) => !prev);
  };
  const handleOnChange = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <input type="number" onChange={handleOnChange} />
        <button onClick={handleOnClick}>Change theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
      </header>
    </div>
  );
}

export default App;
