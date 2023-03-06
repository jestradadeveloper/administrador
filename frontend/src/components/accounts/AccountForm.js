import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewAccount } from "../../store/accounts/thunks";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import TeamSelector from "../teams/TeamSelector";

const AccountForm = () => {
  const { error, errorMessages } = useSelector((state) => state.accounts);
  const { teams } = useSelector((state) => state.teams);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (error) {
      enqueueSnackbar(`${errorMessages}`, {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
  }, [dispatch, error]);

  const onAccountCreate = ({ name, client, teamId }) => {
    console.log(teamId);
    dispatch(addNewAccount(name, client, teamId));
  };
  return (
    <div className="w-full flex-col p-4">
      <strong>Add Account</strong>
      <form
        className="w-full mt-6 space-y-3"
        onSubmit={handleSubmit(onAccountCreate)}
        noValidate
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="name" className="sr-only">
              Account Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Account Name"
              {...register("name", {
                required: "Name is Required",
              })}
            />
          </div>
          <div>
            <label htmlFor="client" className="sr-only">
              Client Name
            </label>
            <input
              id="client"
              name="client"
              type="text"
              autoComplete="client"
              required
              placeholder="Client Name"
              {...register("client", {
                required: "Client Name is Required",
              })}
            />
          </div>

          <div>
            {teams.lenght !== 0 && (
              <TeamSelector
                teams={teams}
                register={{ ...register("teamId") }}
              />
            )}
          </div>
        </div>
        <div>
          <button type="submit" className="btn-primary">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              +
            </span>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
