import React, {useEffect} from "react";
import { WrapperSaleTabs } from "./Tabs.styled";

const Tabs = ({ setSelect, saleData }) => {

  const hanLeAutoSelect = (id) => {
    document.getElementById(id).click()
    document.getElementById(id).focus()
  }
  

  useEffect(() => {
    hanLeAutoSelect(1)
  }, []);
  return (
    <WrapperSaleTabs>
      <nav className="container-tabs">
        {saleData?.map((item) => (
          <ul className="tabs-menu">
            <li className="tabs-item">
              <button id={item.id} onClick={() => setSelect(item.day)} className="button-tab">
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
