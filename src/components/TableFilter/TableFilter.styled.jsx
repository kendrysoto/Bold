import styled from "styled-components";
// import { colors } from "../../styles/theme";
// import { wrapperContainer } from "../../styles/container";

export const WrapperTableFilter = styled.div`
  background: white;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 1px 2px 13px rgb(0 0 0 / 15%);

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

  .text-title{
    color: #fff;
    padding: 1rem;
  }

  .table-container {
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th {
      font-size: 12px;
      height: 30px;
      text-align: left;
      padding: 0.5rem 1rem;
      @media (min-width: 768px) {
        font-size: 16px;
      }
    }

    td {
      height: 30px;
      text-align: left;
      padding: 0.5rem 1rem;
    }

    tr {
      border-bottom: 1pt solid gray;
    }
  }

  /* th{
    height: 30px;
    text-align: left;
    padding: .5rem 1rem;
    border-bottom: 1px solid grey;
  }

  td{
    height: 30px;
    text-align: left;
    padding: .5rem 1rem;
   
  }

  tr{
    border-bottom: 1px solid grey;
   
  } */
`;
