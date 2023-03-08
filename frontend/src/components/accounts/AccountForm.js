import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewAccount, updateAccount } from "../../store/accounts/thunks";
import { useSnackbar } from "notistack";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { setFormMode } from "../../store";
const AccountForm = () => {
  const ref = useRef(null);
  const { error, errorMessages, active, editMode } = useSelector(
    (state) => state.accounts
  );
  const { notification, notificationMessage } = useSelector(
    (state) => state.ui
  );
  const { teams } = useSelector((state) => state.teams);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm();
  const [dinamicTeamId, setDinamicTeamId] = useState("0");
  useEffect(() => {
    if (editMode) {
      const fields = ["name", "client"];
      fields.forEach((field) => setValue(field, active[field]));
    }
    if (active) {
      setDinamicTeamId(active.teamId);
    }
  }, [dispatch, active, editMode]);

  const onAccountCreate = ({ name, client, teamId }) => {
    dispatch(addNewAccount(name, client, teamId, userInfo.userId));
    reset();
  };
  const onAccountEdit = ({ name, client }) => {
    const accountId = `${active.id}`;
    const teamId = dinamicTeamId;
    dispatch(updateAccount(name, client, teamId, accountId));
  };
  const handleChange = (event) => {
    setDinamicTeamId(event.target.value);
  };
  const onChangeMode = () => {
    dispatch(setFormMode());
    reset();
  };
  return (
    <div className="w-full flex-col p-4">
      <div className="flex justify-between items-center">
        <strong>{editMode ? "Edit" : "New"} Account</strong>
        {editMode && (
          <Button color="error" onClick={onChangeMode}>
            <AddCircleIcon />
            <span>close edit mode</span>
          </Button>
        )}
      </div>

      <form
        className="w-full mt-6 space-y-3"
        onSubmit={handleSubmit(!editMode ? onAccountCreate : onAccountEdit)}
        noValidate
        onReset={reset}
      >
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
                required: "Account Name is Required",
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
            <label
              htmlFor="large"
              className="block my-2 font-bold text-red-500 mt-6"
            >
              Assign a team:
              {editMode && (
                <div className="text-gray-600 font-medium">
                  <span>Last Asigned - </span>
                  {active ? active["team-assigned"] : ""}
                </div>
              )}
            </label>
            <div className="overflow-y-scroll h-64">
              {teams &&
                teams.map((item, index) => (
                  <div
                    key={index}
                    className="py-3 font-bold text-red-400 flex items-center px-4"
                  >
                    {
                      <input
                        value={item.id}
                        type="radio"
                        {...register("teamId")}
                        ref={ref}
                        checked={dinamicTeamId === item.id}
                        onChange={handleChange}
                      />
                    }
                    <span className="ml-3">{item.attributes.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="btn-primary">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              +
            </span>
            {editMode ? "Update" : "Create"} Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
