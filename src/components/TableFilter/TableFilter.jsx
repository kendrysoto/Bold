import React  from "react";
import { WrapperTableFilter } from "./TableFilter.styled";

const TableFilter = ({ methodFiltered, select }) => {
  return (
    <WrapperTableFilter>
      <div className="title-table">
        <p className="text-title">Tus ventas de {select}</p>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Transacción</th>
              <th>Fecha y hora</th>
              <th>Metodo de pago</th>
              <th>ID transaccón Bold</th>
              <th>Monto</th>
            </tr>
          </thead>
          {methodFiltered.map((item) => (
            <tbody>
              <tr>
                <td>{item.transaction}</td>
                <td>{item.date}</td>
                <td>{item.PaymentMethod}</td>
                <td>{item.idTransaction}</td>
                <td>{item.amount}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </WrapperTableFilter>
  );
};

export default TableFilter;
