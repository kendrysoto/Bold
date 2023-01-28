import React from "react";
import { WrapperTableFilter } from "./TableFilter.styled";
import masterIcon from "../../assets/master.png";

const TableFilter = ({ methodFiltered, select }) => {
  return (
    <WrapperTableFilter>
      <div className="title-table">
        <p className="text-title">Tus ventas de {select}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Método de pago</th>
            <th>ID transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        {methodFiltered.map((item) => (
          <tbody>
            <tr>
              <td className="transaction" id="Transacción">
                <div className="content-transaction">
                  <img className="master-icon" src={item.img} />
                  <p>{item.transaction}</p>
                </div>
              </td>
              <td id="Fecha y hora">{item.date}</td>
              <td id="Metodo de pago" className="box-payment">
                <img className="master-icon" src={masterIcon} />
                {item.PaymentMethod}
              </td>
              <td id="ID transaccón Bold">{item.idTransaction}</td>
              <td id="Monto">
                <p className="amount">${item.amount}</p>
                <p className="deduction">{item.deduction}</p>
                <p className="total">
                  {item.total && "-$"}
                  {item.total}
                </p>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </WrapperTableFilter>
  );
};

export default TableFilter;
