import React, { useState, useEffect } from "react";
import { WrapperSales } from "./Sales.styled";
import CardSale from "../CardSale/CardSale";
import Tabs from "../Tabs/Tabs";
import Dropdown from "../Dropdown/Dropdown";
import TableFilter from "../TableFilter/TableFilter";
import { dataTable, saleData, datacheckboxes } from "../../constans/dataTable";
import { setToLocalStorage, getToLocalStorage } from "../../utils/localStorage";

const Sales = () => {
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = useState();
  const [methodFiltered, setMethodFiltered] = useState(dataTable);
  const [checkedItems, setCheckedItems] = useState({});

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (getToLocalStorage("dataFiltered")) {
      setMethodFiltered(JSON.parse(getToLocalStorage("dataFiltered")));
    }
    if (getToLocalStorage("checkedObject")) {
      setCheckedItems(JSON.parse(getToLocalStorage("checkedObject")));
    }
  }, []);

  const handLeFilter = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.value]: e.target.checked,
    });

    const resultFilter = dataTable.filter(
      (item) => item.type === e.target.value
    );
    if (e.target.checked) {
      setMethodFiltered(
        methodFiltered === dataTable
          ? [...resultFilter]
          : [...methodFiltered, ...resultFilter]
      );
      setToLocalStorage(
        "dataFiltered",
        methodFiltered === dataTable
          ? [...resultFilter]
          : [...methodFiltered, ...resultFilter]
      );
      setToLocalStorage("checkedObject", {
        ...checkedItems,
        [e.target.value]: e.target.checked,
      });
    } else {
      const resultFilter = methodFiltered.filter(
        (item) => item.type !== e.target.value
      );
      setMethodFiltered(
        resultFilter.length === 0 ? dataTable : [...resultFilter]
      );
      setToLocalStorage(
        "dataFiltered",
        resultFilter.length === 0 ? dataTable : [...resultFilter]
      );
      setToLocalStorage("checkedObject", {
        ...checkedItems,
        [e.target.value]: e.target.checked,
      });
    }
  };

  return (
    <WrapperSales>
      <div className="container">
        <div className="content-tabs">
          <div className="sales-card">
            <CardSale select={select} />
          </div>
          <div className="sales-tabs">
            <Tabs saleData={saleData} setSelect={setSelect} />
            <Dropdown
              open={open}
              handleOpen={handleOpen}
              handLeFilter={handLeFilter}
              datacheckboxes={datacheckboxes}
              checkedItems={checkedItems}
            />
          </div>
        </div>
        <div className="table">
          <TableFilter select={select} methodFiltered={methodFiltered} />
        </div>
      </div>
    </WrapperSales>
  );
};

export default Sales;
