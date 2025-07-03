// function Welcome() {
//   const name = "Yogesh";
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>Welcome to React learning.</p>
//     </div>
//   );
// }

// export default Welcome;

// or

// export function Welcome() {
//   const name = "Yogesh";
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>Welcome to React learning.</p>
//     </div>
//   );
// }

// or 

// export const Welcome = () => {
//   return <h1>Hello, Yogesh!</h1>;
// };


// or

import React, { Component } from "react";
export class Welcome extends Component {
  render() {
    return <h1>Hello, Yogesh!</h1>;
  }
}
// export default Welcome;

export function Greeting(props){
    return(
        <>
        <h2 style={{color:'red'}}>Hi,{props.name}</h2>
        <h3 style={{color:'green'}}>This is new start.</h3>
        </>
    )
}

