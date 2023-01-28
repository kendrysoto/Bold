import styled from "styled-components";
import { colors } from "../../styles/theme";
import { wrapperContainer } from "../../styles/container";

export const Wrapperheader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(20, 33, 90, 1) 0%,
    rgba(20, 33, 90, 1) 35%,
    rgba(115, 47, 79, 1) 100%
  );
  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    ${wrapperContainer};
    .logo {
      img {
        width: 100%;
        height: 30px;
      }
    }
    .navigation {
      display: flex;
      gap: 1rem;
      .navigation-item {
        color: ${colors.white};
        font-size: 0.8rem;
        cursor: pointer;
        @media (min-width: 768px) {
          font-size: 1rem;
        }
      }
      @media (min-width: 768px) {
        gap: 3rem;
      }
    }
    @media (min-width: 768px) {
      padding: 0;
    }
  }
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;
