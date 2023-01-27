import React, { useState } from "react";
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

  const handleOpen = () => {
    setOpen(!open);
  };

  const handLeFilter = (e) => {
    if (e.target.checked) {
      const resultFilter = dataTable.filter(
        (item) => item.transaction === e.target.value
      );
      if (methodFiltered === dataTable) {
        setMethodFiltered([...resultFilter]);
      } else {
        setMethodFiltered([...methodFiltered, ...resultFilter]);
      }
    } else {
      const resultFilter = methodFiltered.filter(
        (item) => item.transaction !== e.target.value
      );
      if (resultFilter.length === 0) {
        setMethodFiltered(dataTable);
      } else {
        setMethodFiltered([...resultFilter]);
      }
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
          <TableFilter select={select} methodFiltered={methodFiltered} />
        </div>
      </div>
    </WrapperSales>
  );
};

export default Sales;
