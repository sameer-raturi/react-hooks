import React, { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const renderCount = useRef(0);
  const prevName = useRef("");
  const [forceRender, doForceRender] = useState({});
  
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // this prevname.current will run after the render cycle
  // so during the render cycle old value will be shown and
  // after the render is done new value be stored as ref doesn;t cause any re render 
  // so the updated value is not shown in the dom
  // we should not use this because if any other render happens due to any state change(here forceRender)
  // it will show latest value
  useEffect(() => {
    prevName.current = text;
  }, [text]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        `no of renders: {renderCount.current}
        i'm currently {text} and i used to be {prevName.current}`
        <button onClick={() => doForceRender({})}>force render</button>
      </header>
    </div>
  );
}

export default App;
