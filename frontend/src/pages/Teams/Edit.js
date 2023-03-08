import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { DashboardLayout } from "../../components/layouts";
import { useDispatch, useSelector } from "react-redux";
import { setTeamById } from "../../store";
import { useForm } from "react-hook-form";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
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
  }, [teamId, dispatch]);
  useEffect(() => {
    dispatch(setTeamById(teamId));
  }, [teamId, dispatch]);

  const [isSubscribed, setIsSubscribed] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ userIds }) => {
    dispatch(setTeamById(teamId));
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
      <Link to="/teams" className="my-4">
        <span className="p-3 border border-red-500 rounded-lg text-red-500">
          Back
          <ArrowCircleLeftIcon />
        </span>
      </Link>
      {active && (
        <>
          <h2 className="text-center p-3 font-bold text-3xl text-red-500">
            {active.name}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="checkList">
              <div className="text-red-500 font-bold py-3">
                Assing members to the team:
              </div>
              <div className="list-container mb-10">
                {users &&
                  users.map((item, index) => (
                    <div
                      key={index}
                      className="py-3 font-bold text-red-400 flex items-center"
                    >
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
              Update Team
            </button>
          </form>
        </>
      )}
    </DashboardLayout>
  );
};

export default TeamPageEdit;
