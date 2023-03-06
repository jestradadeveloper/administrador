import useFetch from "../../utils/useFetch";
import ListLayout from "../layouts/ListLayout";
import AccountCard from "./AccountCard";
import { useDispatch, useSelector } from "react-redux";
const AccountList = () => {
  const { accounts, isLoading } = useSelector((state) => state.accounts);

  return (
    <ListLayout title="Accounts">
      {accounts &&
        accounts.map((account) => (
          <AccountCard
            key={account.id}
            id={account.id}
            account={account.attributes}
          />
        ))}
    </ListLayout>
  );
};

export default AccountList;
