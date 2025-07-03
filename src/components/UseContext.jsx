// What is Context?
// React’s Context API lets you share data globally across components — without passing props manually at every level.

//  Create the Context
// import { createContext } from "react";
// export const UserContext = createContext();

// Wrap with Context Provider
// import { UserContext } from "./UserContext";
function Context1() {
  return (
    <UserContext.Provider value={"Yogesh"}>
      <Layout />
    </UserContext.Provider>
  );
}

// Access Value with useContext()
// import { useContext } from "react";
// import { UserContext } from "./UserContext";
function Header1() {
  const user = useContext(UserContext);

  return <h1>Welcome, {user}!</h1>;
}

// export {Context, Header}





// UserContext.js
import { createContext, useContext } from "react";

export const UserContext = createContext("Guest");

export function Context() {
  return (
    <UserContext.Provider value={"Yogesh"}>
      <Layout />
    </UserContext.Provider>
  );
}

function Layout() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  const user = useContext(UserContext);
  return <h1>Welcome, {user}!</h1>;
}
