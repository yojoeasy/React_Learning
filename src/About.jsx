import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

const About= () => {
  const navigate = useNavigate();

  return (
    <>
      <Header/>
      <Link to="/home">Go to Home</Link>
      <button onClick={() => navigate('/home')}>Home Page</button>
    </>
  );
};

export default About;