import React from "react";
import "./counter.css";

const Counter = () => {
  let [count, setCount] = React.useState(0);

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count - 1);
  }

  return (
    <div className="counter-wrapper">
      <h1 className="show-number">{count}</h1>
      <button className="btn" onClick={add}>
        +
      </button>
      <button className="btn" onClick={sub}>
        -
      </button>
    </div>
  );
};

export default Counter;
