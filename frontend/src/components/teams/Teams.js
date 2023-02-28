import React from 'react'
import TeamForm from './TeamForm'
import TeamList from './TeamList'

const Teams = () => {
  return (
    <div className="flex w-full mx-auto">
        <TeamList />
        <TeamForm />
    </div>
  )
}

export default Teams