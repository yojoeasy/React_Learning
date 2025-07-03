// The useRef hook in React gives you a mutable reference object that persists across renders without causing re-renders.

// import { useRef } from "react";
import { useRef, useEffect, useState } from "react";

function FocusInput() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input element
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}



// import { useRef, useEffect, useState } from "react";

function CounterThi() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}


// const timeoutRef = useRef();

// useEffect(() => {
//   timeoutRef.current = setTimeout(() => {
//     console.log("Run after 1s");
//   }, 1000);

//   return () => clearTimeout(timeoutRef.current); // Clean up
// }, []);



export {FocusInput, CounterThi};