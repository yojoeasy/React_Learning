import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserForm() {
  const [userId, setUserId] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userId) {
      navigate(`/user/${userId}`) // 👈 Navigate dynamically
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter User ID</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter ID"
      />
      <button type="submit">Go to User Page</button>
    </form>
  )
}

export default UserForm
