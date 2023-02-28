import React from "react";

const ProfileCard = ({ profile }) => {
  const { name, email } = profile.attributes;
  const resumeLink = profile.attributes['resume-link']
  const englishLevel = profile.attributes['english-level']
  const technicalInfo = profile.attributes['technical-knowledge']
  return (
    <div className="mx-auto w-8/12 text-center">
      <div className="p-2">
        <h2 className='text-lg text-red-500 font-bold'>Main Info</h2>
        <p>
          <strong>Name:</strong>
          {name}
        </p>
        <p>
          <strong>Email:</strong>
          {email}
        </p>
      </div>
      <div className='p-2'>
        <h2 className='text-lg text-red-500 font-bold'>Additional Information</h2>
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
