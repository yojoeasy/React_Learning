import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Link to="/about">Go to About</Link>
      <button onClick={() => navigate('/about')}>About Page</button>
    </>
  );
};

export default Home;