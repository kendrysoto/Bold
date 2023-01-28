import React, { useEffect } from "react";
import { WrapperSaleTabs } from "./Tabs.styled";
import { handleAutoSelect } from "../../utils/handleAutoSelect";

const Tabs = ({ setSelect, saleData }) => {
  useEffect(() => {
    handleAutoSelect(1);
  }, []);

  return (
    <WrapperSaleTabs>
      <nav className="container-tabs">
        {saleData?.map((item) => (
          <ul className="tabs-menu">
            <li className="tabs-item">
              <button
                id={item.id}
                onClick={() => setSelect(item.day)}
                className="button-tab"
              >
                {item.day}
              </button>
            </li>
          </ul>
        ))}
      </nav>
    </WrapperSaleTabs>
  );
};

export default Tabs;
