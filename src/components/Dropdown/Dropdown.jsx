import React, {useState} from "react";
import { WrapperDropdown } from "./Dropdown.styled";
import Checkbox from "../Checkbox/Checkbox";

const Dropdown = ({ open, handleOpen, handLeFilter, checkedItems, datacheckboxes, setCheckedItems}) => {
  return (
    <WrapperDropdown>
      <div>
        <button className="button-filter" onClick={handleOpen}>
          Filtrar
        </button>
        {open && (
          <div className="content-check">

{datacheckboxes.map((item) => (
        <label key={item.key}>
          {item.name}
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            handLeFilter={handLeFilter}
            value={item.name}
          />
        </label>
      ))}
 <label>ver todos
 <input
        type="checkbox"
        name="all"
        id="selectAll"
      />
 </label>


            {/* <div>
              <input
                onChange={handLeFilter}
                type="checkbox"
                name="datafono"
                value="datafono"
              />
              <label>Cobro con datáfono</label>
            </div>
            <div>
              <input
                onChange={handLeFilter}              
                type="checkbox"
                name="link"
                value="link"
              />
              <label>Cobros con link de pago</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="methods"
                value="all"
              />
              <label>ver todos</label>
            </div>
            <button>filtrar</button> */}
          </div>
        )}
      </div>
    </WrapperDropdown>
  );
};

export default Dropdown;
