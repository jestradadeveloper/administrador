import useFetch from "../../utils/useFetch";
import ListLayout from "../layouts/ListLayout";
import GridLayout from "../layouts/GridLayout";
import AccountCard from "./AccountCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const AccountList = ({ home }) => {
  const { accounts } = useSelector((state) => state.accounts);

  return (
    <>
      {home ? (
        <GridLayout title="Accounts">
          {accounts &&
            accounts.map((account) => (
              <AccountCard
                key={account.id}
                id={account.id}
                account={account.attributes}
              />
            ))}
        </GridLayout>
      ) : (
        <ListLayout title="Accounts">
          {accounts &&
            accounts.map((account) => (
              <AccountCard
                key={account.id}
                id={account.id}
                account={account.attributes}
                teamId={account.relationships.team.data.id}
              />
            ))}
        </ListLayout>
      )}
    </>
  );
};

export default AccountList;
