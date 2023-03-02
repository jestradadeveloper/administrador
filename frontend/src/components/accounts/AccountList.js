import useFetch from "../../utils/useFetch";
import ListLayout from "../layouts/ListLayout";
import AccountCard from "./AccountCard";
const AccountList = () => {
  const { data: accounts, loading, error } = useFetch("/accounts")
  
  return (
    <ListLayout title="Accounts">
      { accounts &&
        accounts.map((account) => (
          <AccountCard key={account.id} account={account.attributes} />
        ))}
    </ListLayout>
  );
};

export default AccountList;
