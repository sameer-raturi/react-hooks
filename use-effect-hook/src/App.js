import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("abc");
  useEffect(() => {
    console.log("ResourceType changed");
    // this will show the new value of resourceType
    console.log(resourceType);
    return () => {
      console.log("clean up run");
      // this will show the previous value of resourceType
      console.log(resourceType);
    };
  }, [resourceType]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </header>
    </div>
  );
}

export default App;
