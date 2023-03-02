import React from "react";
import AccountForm from "./AccountForm";
import AccountList from "./AccountList";

const Accounts = () => {
  return (
    <div className="flex w-full mx-auto flex-col md:flex-row">
      <AccountForm />
      <AccountList />
    </div>
  );
};

export default Accounts;
