
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function UserProfile() {
  const [error, setError] = useState('')
  const [currentUser, logout ] = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError('')
    try{
      await logout()
      navigate('/')
    }catch(err){
      setError('Failed to Logout',err.message)
    }
  } 
  return (
    <div className='user-profile'>
        User Profile
        <div className='userHeader'></div>
        {error&& <p>{error}</p>}
          <strong>Email:</strong> {currentUser.email}
          <div className='user-content'></div>
          <button variant="link" onClick={handleLogout}>Logout</button>
          <Link to='update-profile'>Update Profile</Link>
    </div>
  )
}
