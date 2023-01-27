import React from "react";
import { WrapperSaleTabs } from "./Tabs.styled";

const Tabs = ({ setSelect, saleData }) => {
  return (
    <WrapperSaleTabs>
      <nav className="container-tabs">
        {saleData?.map((item) => (
          <ul className="tabs-menu">
            <li className="tabs-item">
              <button onClick={() => setSelect(item)} className="button-tab">
                {item}
              </button>
            </li>
          </ul>
        ))}
      </nav>
    </WrapperSaleTabs>
  );
};

export default Tabs;
