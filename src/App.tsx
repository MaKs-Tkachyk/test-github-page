import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      Second steptrhrhrthrthrtrtrhrtrrthrthrthtrhrttrh
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} uignuidgndfuinfdnigfigfifgn
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">fhff1111111111111111ff</p>
    </div>
  );
}

export default App;
