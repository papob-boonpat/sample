import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { useFirst } from "./Provider/FirstProvider";

function App() {
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const { setValue } = useFirst();
  const onChange = (type: "plus" | "minus") => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      {show ? (
        <Header
          onClick={() => {
            alert("click header");
          }}
        />
      ) : null}

      <h1 className="text-orange-950">Couter App</h1>
      <h2>{count}</h2>
      <div className="flex justify-between max-w-md m-auto">
        <button
          className="w-12 bg-slate-800 text-white"
          onClick={() => onChange("minus")}
        >
          -
        </button>
        <button
          className="w-12 bg-slate-800 text-white"
          onClick={() => onChange("plus")}
        >
          +
        </button>
      </div>
      <h3>{count}</h3>
      <input
        className="border border-black"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        show Header
      </button>
    </div>
  );
}

export default App;
