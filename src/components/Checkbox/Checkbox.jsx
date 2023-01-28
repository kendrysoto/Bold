import React, { useState } from "react";

const Checkbox = ({
    type = "checkbox",
    name,
    checked,
    handLeFilter,
    value
  }) => {
    console.log("Checkbox: ", name, checked);
  
    return (
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={handLeFilter}
        value={value}
      />
    );
  };

  export default Checkbox;