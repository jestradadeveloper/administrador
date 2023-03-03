
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addNewTeam } from '../../store/teams/thunks';

const TeamForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onTeamCreate = ({ name, description, startDate, endDate }) => {
    //addNewTeam(name, description, responsible, participants)
    dispatch(addNewTeam(name, description, startDate, endDate, 2))
    //console.log(data)
  }


  return (
    <div className="w-full flex-col p-4">
      <strong>Add Team</strong>
      <form className="w-full mt-6 space-y-3" onSubmit={handleSubmit(onTeamCreate)} noValidate>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="name" className="sr-only">
              Team Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Team Name"
              {...register("name", {
                required: 'Team Name is Required'
              })}
            />
          </div>
          <div>
            <label htmlFor="client" className="sr-only">
              Team Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              autoComplete="description"
              required
              placeholder="Team Description"
              {...register("description", {
                required: 'Description is Required'
              })}
            />
          </div>

          <div>
            <label htmlFor="description" className="sr-only">
              Start Date
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              autoComplete="startDate"
              required
              placeholder="Start Date"
              {...register("startDate", {
                required: 'Start Date is Required'
              })}
            />
          </div>
          <div>
            <label htmlFor="description" className="sr-only">
              End Date
            </label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              autoComplete="endDate"
              required
              placeholder="End Date"
              {...register("endDate", {
                required: 'End Date is Required'
              })}
            />
          </div>
          <div>
            <label htmlFor="client" className="sr-only">
              Add Members
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="btn-primary"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              +
            </span>
            Create Team
          </button>
        </div>
      </form>
    </div>
  )
}

export default TeamForm
