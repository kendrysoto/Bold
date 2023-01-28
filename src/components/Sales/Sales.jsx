import React, { useState, useEffect } from "react";
import { WrapperSales } from "./Sales.styled";
import CardSale from "../CardSale/CardSale";
import Tabs from "../Tabs/Tabs";
import Dropdown from "../Dropdown/Dropdown";
import TableFilter from "../TableFilter/TableFilter";
import { dataTable, saleData } from "../../constans/dataTable";

const Sales = () => {
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = useState();
  const [methodFiltered, setMethodFiltered] = useState(dataTable);

  useEffect(() => {
    if(localStorage.getItem("data1")){
      setMethodFiltered(JSON.parse(localStorage.getItem("data1")));
    }
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handLeFilter = (e) => {

    const resultFilter = dataTable.filter(
      (item) => item.transaction === e.target.value
    );
    if (e.target.checked) {
      setMethodFiltered(methodFiltered === dataTable ? [...resultFilter] : [...methodFiltered, ...resultFilter]);
      localStorage.setItem("data1", JSON.stringify(methodFiltered === dataTable ? [...resultFilter] : [...methodFiltered, ...resultFilter]));
      //localStorage.setItem("checkedObject", JSON.stringify(isChecked));
    } else {
      const resultFilter = methodFiltered.filter(
        (item) => item.transaction !== e.target.value
      );
      setMethodFiltered(resultFilter.length === 0 ? dataTable : [...resultFilter]);
      localStorage.setItem("data1", JSON.stringify(resultFilter.length === 0 ? dataTable : [...resultFilter]));
      //localStorage.setItem("checkedObject", JSON.stringify(isChecked));
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
            />
          </div>
        </div>
        <div className="table">
          <TableFilter  select={select} methodFiltered={methodFiltered}  />
        </div>
      </div>
    </WrapperSales>
  );
};

export default Sales;
