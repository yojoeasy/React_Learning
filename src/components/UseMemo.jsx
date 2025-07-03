import React, { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += num;
    }
    return total;
  };

  // 🧠 Memoize this result
  const result = useMemo(() => expensiveCalculation(count), [count]);
  // const result = expensiveCalculation(count);

  return (
    <div>
      <h3>Expensive Computation Result: {result}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type here..." />
    </div>
  );
}

export {ExpensiveComponent};













































































