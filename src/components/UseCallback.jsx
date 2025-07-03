// In React, functions are recreated on every render. If you pass a function as a prop to child components, it causes unnecessary re-renders unless you memoize it.
import React, { useCallback, useState, useMemo } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child</button>;
});


function Parent1() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Child1 onClick={handleClick} />
    </>
  );
}

const Child1 = React.memo(({ onClick }) => {
  console.log("Child1 rendered");
  return <button onClick={onClick}>Child1</button>;
});


export{Parent, Parent1};