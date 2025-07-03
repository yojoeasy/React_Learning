import { useState } from "react";

function Login({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}
      {isLoggedIn && <h1>Yogesh(Logout)</h1>}
    </div>
  );
}

function Dashboard({ isAdmin }) {
  if (isAdmin) {
    return <h1>Welcome Admin</h1>;
  }
  return <h1>Welcome User, Please login.</h1>;
}

function Status({ online }) {
  let message;

  if (online) {
    message = <p>Status: Online ✅</p>;
  } else {
    message = <p>Status: Offline ❌</p>;
  }

  return <div>{message}</div>;
}

function ToggleMessage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Message
      </button>

      {show && <p>This is a secret message!</p>}
    </div>
  );
}

export {ToggleMessage, Status, Dashboard, Login};