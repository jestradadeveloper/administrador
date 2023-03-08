import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserFormMode } from "../../store";
import { updateProfileData } from "../../store/users/thunks";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const ProfileCard = () => {
  const { userInfo } = useSelector((action) => action.auth);
  const { editMode } = useSelector((action) => action.users);
  const dispatch = useDispatch();
  const profile = userInfo;
  const { name, email } = profile;
  const totalTeams = profile["total-teams"];
  const totalAccounts = profile["total-accounts"];
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onUpdateProfile = (user) => {
    dispatch(updateProfileData(user));
  };
  useEffect(() => {
    if (editMode) {
      const fields = [
        "name",
        "email",
        "english-level",
        "resume-link",
        "technical-knowledge",
      ];
      fields.forEach((field) => setValue(field, userInfo[field]));
    }
  }, [editMode]);
  const onChangeMode = () => {
    dispatch(setUserFormMode());
  };
  return (
    <form
      className="mx-auto w-8/12 text-center"
      onSubmit={handleSubmit(onUpdateProfile)}
    >
      <div className="p-2">
        <div className="flex justify-end">
          {editMode ? (
            <Button color="error" onClick={onChangeMode}>
              <span>close edit mode</span>
            </Button>
          ) : (
            <Button color="error" onClick={onChangeMode}>
              <BorderColorOutlinedIcon />
              <span>Edit mode</span>
            </Button>
          )}
        </div>
        <h2 className="text-lg text-red-500 font-bold">Main Info</h2>
        <div className="p-5 justify-center items-center flex">
          <img src={`https://robohash.org/${email}`} alt="avatar" width={150} />
        </div>
        <strong>Name:</strong>
        {editMode ? (
          <input type="text" name="name" {...register("name")} />
        ) : (
          <p className="text-xl text-red-500 p-3">{name} </p>
        )}
        <strong>Email:</strong>
        {editMode ? (
          <input type="text" name="email" {...register("email")} />
        ) : (
          <p className="text-xl text-red-500 p-3">{email} </p>
        )}
      </div>
      <div className="p-2">
        <h2 className="text-lg text-red-500 font-bold">Teams Created</h2>
        <p>{totalTeams}</p>
      </div>
      <div className="p-2">
        <h2 className="text-lg text-red-500 font-bold">Accounts Created</h2>
        <p>{totalAccounts}</p>
      </div>
      <div className="p-2">
        <h2 className="text-lg text-red-500 font-bold py-3">
          Additional Information
        </h2>
        <strong>CV link:</strong>
        {editMode ? (
          <input type="text" name="resume_link" {...register("resume-link")} />
        ) : (
          <p className="text-xl text-red-500 p-3">{userInfo["resume-link"]} </p>
        )}

        <strong>English Level:</strong>
        {editMode ? (
          <input
            type="text"
            name="english_level"
            {...register("english-level")}
          />
        ) : (
          <p className="text-xl text-red-500 p-3">
            {userInfo["english-level"]}
          </p>
        )}
        <strong>Tech Stack Info:</strong>
        {editMode ? (
          <input
            type="text"
            name="technical-knowledge"
            {...register("technical-knowledge")}
          />
        ) : (
          <p className="text-xl text-red-500 p-3">
            {userInfo["technical-knowledge"]}
          </p>
        )}
        {editMode && (
          <button className="btn-primary my-3">Update profile</button>
        )}
      </div>
    </form>
  );
};

export default ProfileCard;
