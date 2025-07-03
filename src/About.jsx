import { Link, useNavigate } from 'react-router-dom';

const About= () => {
  const navigate = useNavigate();

  return (
    <>
      <Link to="/home">Go to Home</Link>
      <button onClick={() => navigate('/home')}>Home Page</button>
    </>
  );
};

export default About;