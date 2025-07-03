// import React from "react";
import { useState } from "react";

function ClickButton() {
  const handleClick = () => {
    alert("You clicked the button!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

function InputBox() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}

function FormExample() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Submitted thing: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}


export{ClickButton, InputBox, FormExample};