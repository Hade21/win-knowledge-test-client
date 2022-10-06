import { useState } from "react";
import Router from "./routes/routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-roboto">
      <Router />
    </div>
  );
}

export default App;
