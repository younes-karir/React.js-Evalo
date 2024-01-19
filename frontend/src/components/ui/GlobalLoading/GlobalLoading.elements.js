import styled, { keyframes } from "styled-components";

const Loadingg = keyframes`
  from {
       
  transform: rotate(0deg);
  }

  to {
       
  transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: 10000;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background2};
`;

export const UI = styled.div`
  position: relative;
  height: ${(props) => (props.small ? "1.5rem" : "3rem")};
  width: ${(props) => (props.small ? "1.5rem" : "3rem")};
  border-radius: 50%;
  border: ${(props) => (props.small ? "2px" : "4px")} solid
    ${(props) => props.theme.colors.primary};
  opacity: ${(props) => (props.small ? ".8" : ".9")};
  border-right-color: transparent;
  border-left-color: transparent;
  animation: ${Loadingg} 0.8s infinite ease-out;
`;
