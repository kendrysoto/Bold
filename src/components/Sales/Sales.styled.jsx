import styled from "styled-components";
import { wrapperContainer } from "../../styles/container";

export const WrapperSales = styled.div`
  margin-top: 2rem;
  padding: 1rem;

  .container {
    display: flex;
    flex-direction: column;
    .content-tabs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      ${wrapperContainer};

      .sales-card {
        width: 100%;
        @media (min-width: 768px) {
          width: 35%;
        }
      }
      .sales-tabs {
        width: 100%;
        @media (min-width: 768px) {
          width: 65%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
        }
      }
      @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        justify-content: space-between;
      }
    }
  }

  .table {
    ${wrapperContainer};
    padding-top: 1rem;
  }
`;
