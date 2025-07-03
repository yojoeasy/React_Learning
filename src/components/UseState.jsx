import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = () => {
        setCar(previousState => {
        return { ...previousState, color: "blue" }
        });
    }

    function updateCar(){
        // setCar('Blue');         // Replaces entire object with a string
        setCar({color: "Blue" }); 
    };  

    const carColor = () => {
        setCar('Black');          // Replaces entire object with a string
        setCar({color: "Black" }); 
    }; 

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
      <button type="button" onClick={updateColor}>Blue(correct)</button>
      <button type="button" onClick={updateCar}>Blue(Wrong)</button>
      <button type="button" onClick={carColor}>Black(Wrong)</button>
    </>
  )
}


export{Counter, Toggle, Car};