import styled from "styled-components";
// import { colors } from "../../styles/theme";
// import { wrapperContainer } from "../../styles/container";

export const WrapperDropdown = styled.div`
.button-filter{
    height: 40px;
    width: 100%;
    padding: .5rem;
    background-color: white;
    border: none;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-top: 1rem;
    @media (min-width: 768px) {
        width: 250px;
        margin-top: 0;
    }
}

 .content-check{
    background-color: white;
    padding: 1rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    @media (min-width: 768px) {
    z-index: 1;
    position: absolute;
    width: 218px;
    }
 }
`;
