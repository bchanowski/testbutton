import { useState } from "react";
import NewButton from "./components/NewButton";
import Text from "./components/Text";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      {show ? <NewButton onClick={() => setShow(false)} /> : <Text />}
    </div>
  );
}

export default App;
