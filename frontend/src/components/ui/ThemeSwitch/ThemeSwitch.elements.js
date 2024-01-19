import styled from "styled-components";
import { MdLightMode} from "react-icons/md";

import {RiMoonClearFill} from "react-icons/ri"

export const Container = styled.div`
  height: 2rem;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: fit-content;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.light ? "flex-start" : "flex-end")};
  border-radius: 100px;
  padding: 0rem 0.15rem;
  /* background-color: ${(props) => props.theme.colors.background}; */
`;

export const Holder = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* background-color: ${(props) => props.theme.colors.background2}; */
`;

export const Dark = styled(RiMoonClearFill)`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text2};
  transition: transform 0.2s linear;
  /* transform: rotate(50deg); */

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: rotate(40deg);
  }
`;

export const Light = styled(MdLightMode)`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text2};
  transition: transform 0.2s linear;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: rotate(90deg);
  }
`;
