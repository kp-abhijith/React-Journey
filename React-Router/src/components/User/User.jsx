import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {userid}=useParams()
  return (
      <>
          <h1>User Profile</h1>
          <h2>UserId : {userid }</h2>
      </>
  )
}

export default User