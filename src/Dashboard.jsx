import { Outlet, Link } from 'react-router-dom';

function Dashboard1() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      <Outlet /> {/* 👈 This is where nested routes will render */}
    </div>
  );
}

export default Dashboard1;
