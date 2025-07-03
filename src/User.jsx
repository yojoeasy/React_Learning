import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID from URL: {id}</p>
    </div>
  );
}

export default User;
