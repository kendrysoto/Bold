import styled from "styled-components";
import { colors } from "../../styles/theme";

export const WrapperDropdown = styled.div`
  box-shadow: 1px 2px 13px rgb(0 0 0 / 15%);
  .button-filter {
    height: 40px;
    width: 100%;
    padding: 0.5rem;
    color: ${colors.primary};
    background-color: ${colors.white};
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    text-transform: uppercase;
    @media (min-width: 768px) {
      width: 200px;
      margin-top: 0;
    }
  }

  .icon-filter {
    width: 20px;
    height: 20px;
  }

  .open-drop {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .content-check {
    background-color: ${colors.white};
    padding: 0.5rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    @media (min-width: 768px) {
      z-index: 1;
      position: absolute;
      width: 184px;
      font-size: 13px;
    }
  }

  .box-apply {
    padding: 0.5rem;
    text-align: center;

    .apply-button {
      border: none;
      padding: 0.5rem 2rem;
      color: ${colors.white};
      background-color: ${colors.secondary};
      font-weight: 600;
      border-radius: 20px;
    }
  }
`;
