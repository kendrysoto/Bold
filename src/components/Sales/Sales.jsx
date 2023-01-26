import React from "react";
import { WrapperSales } from "./Sales.styled";
import CardSale from "../CardSale/CardSale";
import Tabs from "../Tabs/Tabs";

const Sales = () => {
  return (
    <WrapperSales>
        <div className="container">
            <div className="sales-card">
                <CardSale />
            </div>
            <div className="sales-tabs">
                <Tabs />
            </div>
        </div>
    </WrapperSales>
  );
};

export default Sales;
