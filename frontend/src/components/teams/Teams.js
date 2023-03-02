import React from 'react'
import TeamForm from './TeamForm'
import TeamList from './TeamList'

const Teams = () => {
  return (
    <div className="flex w-full mx-auto flex-col md:flex-row">
      <TeamForm />
      <TeamList />
    </div>
  )
}

export default Teams