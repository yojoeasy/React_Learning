// import { useState } from "react";
import { useState, useEffect } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// import useCounter from "./useCounter";

function CounterSec() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>➕</button>
      <button onClick={decrement}>➖</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}





// import { useState, useEffect } from "react";

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => {
//         setData(json);
//         setLoading(false);
//       });
//   }, [url]);

//   return { data, loading };
// }

// const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users");

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // New

  useEffect(() => {
    const controller = new AbortController(); // cancel fetch on unmount
    const signal = controller.signal;

    setLoading(true);
    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// import React from "react";
// import useFetch from "./useFetch"; // or paste directly into the component file

function UserListSec() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}

// export default UserList;








// import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Read from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("useLocalStorage error:", error);
      return initialValue;
    }
  });

  // Update localStorage whenever the value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("useLocalStorage set error:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

function Known() {
  const [name, setName] = useLocalStorage("user_name", "");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
}



// export default useCounter;
export {CounterSec, Known, UserListSec};
