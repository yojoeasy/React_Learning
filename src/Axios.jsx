import axios from 'axios';
import { useEffect, useState } from 'react';

const Axios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>Users (Axios)</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
};

const Axios1 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
      let isMounted = true;

  const fetchData = async () => {
        try {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };
    fetchData();
      return () => {
            isMounted = false; // Cleanup to prevent setState on unmounted component
        };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>Posts (Axios)</h2>
      <ul>
        {posts.map((u) => (
          <li key={u.id}>{u.title}</li>
        ))}
      </ul>
    </>
  );
};


export {Axios, Axios1};
