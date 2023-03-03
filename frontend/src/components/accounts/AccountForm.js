import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addNewAccount } from '../../store/accounts/thunks';

const AccountForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onAccountCreate = ({name, client}) => {
    //addNewTeam(name, description, responsible, participants)
    dispatch(addNewAccount(name, client))
    //console.log(data)
  }
  return (
    <div className="w-full flex-col p-4">
      <strong>Add Account</strong>
      <form className="w-full mt-6 space-y-3" onSubmit={handleSubmit(onAccountCreate)} noValidate>
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
                required: 'Name is Required'
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
                required: 'Client Name is Required'
              })}
            />
          </div>

          <div>
            <label htmlFor="client" className="sr-only">
              Responsible
            </label>
            <input
              id="responsible"
              name="responsible"
              type="text"
              autoComplete="responsible"
              required
              placeholder="Responsible"
            />
          </div>

          <div>
            <label htmlFor="team" className="sr-only">
              Team
            </label>
            <input
              id="team"
              name="team"
              type="text"
              autoComplete="team"
              required
              placeholder="Team"
            />
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
