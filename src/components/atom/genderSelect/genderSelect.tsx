import React, { useState } from "react";

interface GenderSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const GenderSelect = ({ value, onChange }: GenderSelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="list-categories">Select Gender</label>
      <select
        name="list-category"
        value={value}
        id="list-category"
        onChange={onChange}
        className="rounded border border-input-border bg-white px-3 py-2"
      >
        <option value=""></option>
        <option value="Male">Male</option>;
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default GenderSelect;
