import React from "react";
import { WrapperDropdown } from "./Dropdown.styled";
import Checkbox from "../Checkbox/Checkbox";
import filterIcon from "../../assets/filter.png";

const Dropdown = ({
  open,
  handleOpen,
  handLeFilter,
  checkedItems,
  datacheckboxes,
}) => {
  return (
    <WrapperDropdown>
      <div>
        <button
          className={`button-filter ${open ? "open-drop" : ""}`}
          onClick={handleOpen}
        >
          Filtrar
          <img className="icon-filter" src={filterIcon} />
        </button>
        {open && (
          <div className="content-check">
            {datacheckboxes.map((item) => (
              <div key={item.key}>
                <Checkbox
                  name={item.name}
                  checked={checkedItems[item.name]}
                  handLeFilter={handLeFilter}
                  value={item.name}
                  label={item.label}
                />
              </div>
            ))}
            <div className="box-apply">
              <button className="apply-button">Aplicar</button>
            </div>
          </div>
        )}
      </div>
    </WrapperDropdown>
  );
};

export default Dropdown;
