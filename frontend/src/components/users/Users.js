import React from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

const Users = () => {
  return (
    
    <div className="flex w-full mx-auto flex-col md:flex-row">
      <UserForm />
      <UserList />
    </div>
  );
};

export default Users;
