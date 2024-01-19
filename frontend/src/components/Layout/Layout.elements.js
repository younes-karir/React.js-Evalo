import styled from "styled-components";
import devices from "../../helpers/Devices";

export const BodyWrapper = styled.div`
  position: absolute;
  width: 100%;
  /* top: 0; */
  display: grid;
`;

export const BodyContainer = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
  

  @media ${devices.laptop} {
    display: grid;
    grid-template-areas: "menu content";
    grid-template-columns: min-content auto;
  }
`;

export const ContentWrapper = styled.div`
   background-color: ${props => props.theme.colors.background};
    height: 100%;

  @media ${devices.laptop} {
    /* grid-area: "content"; */
    width: 100%;

  }
`;


