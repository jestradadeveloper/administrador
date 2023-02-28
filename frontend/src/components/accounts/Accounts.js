import React from 'react'
import AccountForm from './AccountForm'
import AccountList from './AccountList'

const Accounts = () => {
  return (
    <div className="flex w-full mx-auto">
        <AccountList />
        <AccountForm />
    </div>
  )
}

export default Accounts