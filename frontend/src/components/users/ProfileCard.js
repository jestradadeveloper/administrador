import React from "react";

const ProfileCard = ({ profileInfo }) => {
  const profile = profileInfo;
  const { name, email } = profile;
  const resumeLink = profile["resume_link"];
  const englishLevel = profile["english-level"];
  const technicalInfo = profile["technical-knowledge"];
  const totalTeams = profile["total-teams"];
  const totalAccounts = profile["total-accounts"];
  return (
    <div className="mx-auto w-8/12 text-center">
      <div className="p-2">
        <h2 className="text-lg text-red-500 font-bold">Main Info</h2>
        <div className="p-5 justify-center items-center flex">
          <img src={`https://robohash.org/${email}`} alt="avatar" width={150} />
        </div>
        <p>
          <strong>Name:</strong>
          {name}
        </p>
        <p>
          <strong>Email:</strong>
          {email}
        </p>
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
        <h2 className="text-lg text-red-500 font-bold">
          Additional Information
        </h2>
        <p>
          <strong>CV link:</strong>
          {resumeLink}
        </p>
        <p>
          <strong>English Level:</strong>
          {englishLevel}
        </p>
        <p>
          <strong>Tech Stack Info:</strong>
          {technicalInfo}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
