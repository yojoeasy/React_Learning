// import { useEffect, useState } from "react";

// useEffect(() => {
//   console.log("Component mounted");
// }, []);

// const [count, setCount] = useState(0);

// useEffect(() => {
//   console.log("Count changed:", count);
// }, [count]); // runs every time count changes


// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Running...");
//   }, 1000);

//   // cleanup
//   return () => clearInterval(timer);
// }, []);

// export {UserList}





import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  // Run once on mount
  useEffect(() => {
    console.log("Component mounted");

    // Timer side effect
    const timer = setInterval(() => {
      console.log("Running...");
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []);

  // Log when `count` changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // Fetch user data on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count ({count})
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}



// import { useEffect, useState } from "react";

function UserList1() {
  const [users, setUsers] = useState([]);           // All users from API
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered users
  const [loading, setLoading] = useState(true);     // Loading spinner
  const [error, setError] = useState(null);         // Error message
  const [search, setSearch] = useState("");         // Search text
  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const usersPerPage = 5;

  // Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter users by name
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page on search
  }, [search, users]);

  // Pagination logic
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px" }}
      />

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Loading Spinner */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          {/* User List */}
          <ul>
            {currentUsers.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> — {user.email}
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span style={{ margin: "0 10px" }}>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export { UserList, UserList1 };

