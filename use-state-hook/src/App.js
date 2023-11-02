import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => 4);

  const handleDecreament = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncreament = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleDecreament}>-</button>
        {count}
        <button onClick={handleIncreament}>+</button>
      </header>
    </div>
  );
}

export default App;
