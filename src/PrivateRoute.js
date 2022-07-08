import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function PrivateRoute({ childern }) {
    const { currentUser } = useAuth()
  return (
    currentUser ? childern : <Navigate to="/login" />
  )
}
