import { Link, useNavigate } from 'react-router-dom';
import Header from './Header.jsx';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header/>
      <Link to="/about">Go to About</Link>
      <button onClick={() => navigate('/about')}>About Page</button>
    </>
  );
};

export default Home;