import styled from "styled-components";
import { colors } from "../../styles/theme";

export const WrapperSaleCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${colors.white};
  box-shadow: 1px 2px 13px rgb(0 0 0 / 15%);
  .header-card{
    background: linear-gradient(90deg, rgba(86,43,82,1) 0%, rgba(165,86,108,1) 100%);
    display: flex;
    align-items: center;
    color: ${colors.white};
    gap: 1rem;
    justify-content: space-evenly;
    height: 60px;
    width: 100%;
    .header-card-title{
      color: ${colors.white};
      font-size: 14px;
      font-weight: 600;
    }
  }

  .body-card{
    text-align: center;
    padding: 1rem 0 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
    .total-sales{      
      font-size: 29px;
      background:linear-gradient(#5e2f55,#a4566c);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 800;
      }
    .last-date{
      font-size: 14px;
      font-weight: 500;
      color: ${colors.primary};
    }
  }
  
  @media (min-width: 768px) {
    
  }
`;
