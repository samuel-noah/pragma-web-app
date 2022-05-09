
import React, {useState, useHistory} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './Auth'

export default function UserProfile() {
  const [error, setError] = useState('')
  const [currentUser, Logout ] = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')
    try{
      await Logout()
      history.push('/')
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
