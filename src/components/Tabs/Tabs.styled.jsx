import styled from "styled-components";
import { colors } from "../../styles/theme";

export const WrapperSaleTabs = styled.div`
  width: 100%;
  background-color: ${colors.white};
  box-shadow: 1px 2px 13px rgb(0 0 0 / 15%);
  .container-tabs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .tabs-menu {
      display: flex;
      list-style: none;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      padding: 0.5rem 1rem;
      .tabs-item {
        width: 100%;
      }

      .button-tab{
        color: ${colors.primary};
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        background-color: white;
        border: none;

        &:focus {
        background-color: ${colors.background};
        border-radius: 60px;
        height: auto;
        height: 40px;
        font-weight: 600;
      }
      }
    

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
  }
`;
