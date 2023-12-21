import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter(counter + 1);
    if (counter >= 20) {
      setCounter(20);
    }
  };
  const removeValue = () => {
    setCounter(counter - 1);
    if (counter == 0) {
      setCounter(0);
    }
  };

  return (
    <>
      <h1>Hello Developer</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
export default App;
