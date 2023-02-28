import React from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

const Users = () => {
  return (
    <div className="flex w-full mx-auto">
      <UserList />
      <UserForm />
    </div>
  )
}

export default Users
