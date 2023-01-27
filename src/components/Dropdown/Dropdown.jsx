import React from "react";
import { WrapperDropdown } from "./Dropdown.styled";

const Dropdown = ({ open, handleOpen, handLeFilter }) => {
  
  return (
    <WrapperDropdown>
      <div>
        <button className="button-filter" onClick={handleOpen}>Filtrar</button>
        {open && (
          <div className="content-check">
            <div>
              <input
                onChange={handLeFilter}
                type="checkbox"
                name="methods"
                value="datafono"
              />
              <label>Cobro con datáfono</label>
            </div>
            <div>
              <input
                onChange={handLeFilter}
                type="checkbox"
                name="methods"
                value="link"
              />
              <label>Cobros con link de pago</label>
            </div>
            <div>
              <input
                onChange={handLeFilter}
                type="checkbox"
                name="methods"
                value="all"
              />
              <label>ver todos</label>
            </div>
            <button>filtrar</button>
          </div>
        )}
      </div>
    </WrapperDropdown>
  );
};

export default Dropdown;
