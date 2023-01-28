import styled from "styled-components";
import { colors } from "../../styles/theme";

export const WrapperTableFilter = styled.div`
  border-radius: 10px;
  box-shadow: 1px 2px 13px rgb(0 0 0 / 15%);

  @media screen and (min-width: 768px) {
    background-color: ${colors.white};
  }

  table {
    border: 1px solid ${colors.background};
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  .content-transaction {
    display: flex;
    justify-content: end;
    align-items: center;

    @media screen and (min-width: 768px) {
      justify-content: start;
      gap: 5px;
    }
  }

  .transaction,
  .amount {
    color: ${colors.primary};
    font-weight: 500;
  }

  .master-icon {
    width: 20px;
    height: 20px;
  }

  .deduction,
  .total {
    font-size: 12px;
    padding-top: 4px;
  }

  .total {
    color: ${colors.secondary};
  }

  table tr {
    border: 1px solid ${colors.primary};
    background-color: ${colors.white};

    @media screen and (min-width: 768px) {
      border: none;
    }
  }

  table th,
  table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid ${colors.background};
    color: ${colors.light};
    font-size: 14px;
  }

  table th {
    font-size: 0.85em;
    color: ${colors.light};
  }

  @media screen and (max-width: 425px) {
    table {
      border: 0;
    }

    table thead {
      border: none;
      height: 1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      display: block;
      margin-bottom: 0.625em;
    }

    table td {
      border-bottom: 1px solid ${colors.background};
      display: block;
      font-size: 12px;
      text-align: right;
    }

    table td::before {
      content: attr(id);
      float: left;
      font-weight: bold;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }

  .title-table {
    background: linear-gradient(
      90deg,
      rgba(20, 33, 90, 1) 0%,
      rgba(20, 33, 90, 1) 35%,
      rgba(115, 47, 79, 1) 100%
    );

    height: 45px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .text-title {
    color: ${colors.white};
    padding: 1rem;
    font-weight: 600;
  }
`;
