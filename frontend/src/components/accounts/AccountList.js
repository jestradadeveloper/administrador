
import AccountCard from "./AccountCard";
import { useState, useEffect } from 'react'
const AccountList = () => {
  const [accounts, setAccounts] = useState(null)
  const APIURL = "http://localhost:3000";
  useEffect(() => {
    fetch(`${APIURL}/api/v1/accounts`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data);

        console.log(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="w-full max-w-md px-4 shadow sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-red-500">
          Latest Accounts
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-gray-600 hover:underline"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {accounts && accounts.map(account => <AccountCard key={account.id} account={account}/>) }
        </ul>
      </div>
    </div>
  );
};

export default AccountList;
