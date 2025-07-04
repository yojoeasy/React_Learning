import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

const PostsQuery = () => {
  const { data, isLoading, isError, error } = 
//   useQuery({
//     queryKey: ['posts'],
//     queryFn: fetchPosts,
//   });
useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
  refetchInterval: 60000, // refetch every 60 seconds
});

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts (React Query)</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};



const fetchPosts1 = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
};

const UsersQuery = () => {
  const { data, isLoading, isError, error } = 
useQuery({
  queryKey: ['users'],
  queryFn: fetchPosts1
});

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users (React Query)</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.name}</strong>
            <p>{post.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export {PostsQuery, UsersQuery};
