import styled from "styled-components";
import { keyframes } from "styled-components";

const Loadingg = keyframes`
  from {
       
  transform: rotate(0deg);
  }

  to {
       
  transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  /* position: absolute; */
  height: 100%;
  width: 100%;
  min-height: ${props => props.small ? 'fit-content' : '12rem'};
  /* background-color: ${(props) => props.theme.colors.background}; */
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content:  ${props => props.small ? 'start' : 'center'};
  align-items: center;
  z-index: 1;
  padding-top:  ${props => props.small ? '.8rem' : '0rem'};

`;

export const LoadingIcon = styled.div`
  position: relative;
  height:  ${props => props.small ? '1.5rem' : '3rem'};
  width:  ${props => props.small ? '1.5rem' : '3rem'};
  border-radius: 50%;
  border:  ${props => props.small ? '2px' : '4px'} solid ${(props) => props.theme.colors.primary};
  opacity:  ${props => props.small ? '.8' : '.9'};
  border-right-color: transparent;
  border-left-color: transparent;
  animation: ${Loadingg} .8s infinite ease-out;
`;
