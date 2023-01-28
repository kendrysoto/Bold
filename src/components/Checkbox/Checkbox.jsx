import React from "react";
import { WrapperCheckbox } from "./Checkbox.styled";

const Checkbox = ({
  type = "checkbox",
  name,
  checked,
  handLeFilter,
  value,
  label,
}) => {
  return (
    <WrapperCheckbox>
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={handLeFilter}
        value={value}
      />
      <label>{label}</label>
    </WrapperCheckbox>
  );
};

export default Checkbox;
