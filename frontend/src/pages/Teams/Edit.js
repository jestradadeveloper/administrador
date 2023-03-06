import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../components/layouts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTeamById, setUsers } from "../../store";
import TeamCard from "../../components/teams/TeamCard";
import { useForm } from "react-hook-form";
import {
  addParticipantsByTeamId,
  showParticipantsByTeamId,
} from "../../store/teams/thunks";

const TeamPageEdit = () => {
  const ref = useRef(null);
  const { active, participants } = useSelector((action) => action.teams);
  const { users } = useSelector((action) => action.users);
  const { teamId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(showParticipantsByTeamId(teamId));
  }, [teamId]);
  useEffect(() => {
    dispatch(setTeamById(teamId));
  }, [teamId]);

  const [isSubscribed, setIsSubscribed] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ userIds }) => {
    dispatch(addParticipantsByTeamId(teamId, userIds));
    navigate(`/teams/${teamId}`);
  };
  const participantsIds = [];
  const filtrado = participants?.forEach((v) =>
    participantsIds.indexOf(v.id) === -1 ? participantsIds.push(v.id) : null
  );
  const handleChange = (event) => {
    setIsSubscribed((current) => !current);
  };
  return (
    <DashboardLayout title={`Edit team`}>
      {active && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="name"
            {...register("name")}
            value={active?.name}
          />
          <input
            type="text"
            name="description"
            {...register("description")}
            value={active?.description}
          />
          <input
            type="date"
            name="startDate"
            {...register("startDate")}
            defaultValue={active?.["start-date"]}
          />
          <input
            type="date"
            name="endDate"
            {...register("endDate")}
            defaultValue={active?.["end-date"]}
          />
          <div className="checkList">
            <div className="text-red-500 font-bold py-3">
              Assing members to the team:
            </div>
            <div className="list-container">
              {participants && participants.map((p) => console.log(p))}
              {users &&
                users.map((item, index) => (
                  <div key={index} className="p-3">
                    {participantsIds?.includes(item.id) ? (
                      <input
                        value={item.id}
                        type="checkbox"
                        {...register("userIds")}
                        ref={ref}
                        defaultChecked={participantsIds?.includes(item.id)}
                        onChange={handleChange}
                      />
                    ) : (
                      <label htmlFor="suscribe">
                        <input
                          value={item.id}
                          type="checkbox"
                          ref={ref}
                          {...register("userIds")}
                          onChange={handleChange}
                        />
                      </label>
                    )}

                    <span className="ml-3">{item.attributes.email}</span>
                  </div>
                ))}
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary"
            register={register("users_id")}
          >
            Update Account
          </button>
        </form>
      )}
    </DashboardLayout>
  );
};

export default TeamPageEdit;
