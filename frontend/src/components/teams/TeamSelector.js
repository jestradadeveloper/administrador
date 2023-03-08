import { useEffect, useState } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import { useController, useForm } from "react-hook-form";
const TeamSelector = () => {
  const { register, handleSubmit, formState, control } = useForm();
  const { teams } = useSelector((state) => state.teams);
  const { active } = useSelector((state) => state.accounts);
  const [selectedId, setSelectedId] = useState("");
  const [teamList, setTeamList] = useState([]);

  const { field } = useController({ name: "teamId", control });
  const { value: teamValue, onChange: teamOnChange, ...restTeamField } = field;
  const [defaultSelected, setDefaultSelected] = useState({
    label: "",
    value: "",
  });

  const handleSelectChange = (evt) => {
    setSelectedId(evt);
  };
  useEffect(() => {
    if (active) {
      setDefaultSelected({ label: active["team-assigned"], value: active.id });
    }
  }, [active]);
  useEffect(() => {
    const tl = teams.map((team) => ({
      value: team.id,
      label: team.attributes.name,
    }));
    setTeamList(tl);
  }, []);

  return (
    <>
      <label htmlFor="large" className="block my-2 font-bold text-red-500">
        Assign a team
      </label>
      {teamList && (
        <Select
          id="teamId"
          options={teams.map((team) => ({
            value: team.id,
            label: team.attributes.name,
          }))}
          value={
            teamValue ? teamList.find((x) => x.value === teamValue) : teamValue
          }
          onChange={(option) => teamOnChange(option ? option.value : option)}
          {...restTeamField}
        />
      )}
    </>
  );
};

export default TeamSelector;
