import useFetch from "../../utils/useFetch";
import ListLayout from "../layouts/ListLayout";
import AccountCard from "./AccountCard";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAccounts } from "../../store/accounts/thunks";
const AccountList = () => {
  const dispatch = useDispatch()
  const { accounts, isLoading } = useSelector((state) => state.accounts)
  useEffect(() => { 
    dispatch(getAccounts())
  }, [])

  return (
    <ListLayout title="Accounts">
      { accounts &&
        accounts.map((account) => (
          <AccountCard key={account.id} id={account.id} account={account.attributes} />
        ))}
    </ListLayout>
  );
};

export default AccountList;
