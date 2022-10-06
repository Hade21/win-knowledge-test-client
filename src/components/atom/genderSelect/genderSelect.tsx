import React, { useState } from "react";

interface GenderSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const GenderSelect = ({ value, onChange }: GenderSelectProps) => {
  const [selected, setSelected] = useState(value);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="list-categories">Select Gender</label>
      <select
        name="list-category"
        value={selected}
        id="list-category"
        onChange={onChange}
        className="rounded border border-input-border bg-white p-4"
      >
        <option value="Male">Male</option>;
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default GenderSelect;
