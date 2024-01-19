import styled from "styled-components";
import TimeField from "react-simple-timefield";

export const TimeFieldStyled = styled(TimeField)`
  font-size: 1rem;
  height: 32px;
  width: 28% !important;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  outline: none;
  letter-spacing: 0.5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 2px 0px, #9ab6e4 0px 0px 0px 1px;
  color: ${(props) => props.theme.colors.InputColor};
  background-color: ${(props) => props.theme.colors.InputBackground};
  opacity: ${(props) => (props.disabled ? ".5" : "1")};
  border-left: 3px solid  #9ab6e4;
  border-right: 3px solid  #9ab6e4;
`;
