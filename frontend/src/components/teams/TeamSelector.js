import React from "react";

const TeamSelector = ({ teams, register }) => {
  return (
    <>
      <label htmlFor="large" className="block my-2 font-bold text-red-500">
        Assign a team
      </label>
      <select
        id="team"
        name="team"
        className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        {...register}
      >
        {teams.map((team) => (
          <option value={`${team.id}`} key={team.id}>
            {team.attributes.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default TeamSelector;
