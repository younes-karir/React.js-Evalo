import styled from "styled-components";
import { Link as LinkR} from "react-router-dom";

import {AiFillCaretRight} from 'react-icons/ai';

export const PositionContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-left: 4px solid ${props => props.theme.colors.primary};
  border-right: 4px solid ${props => props.theme.colors.primary};
`;

export const PositionWrapper = styled.ul`
  list-style: none;
  display: flex;
  height: 2.5rem;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;



`;

export const Right = styled(AiFillCaretRight)`
margin-right: 6px;
font-size: 1.1rem;

color: ${props => props.theme.colors.text};
`;

export const Link = styled(LinkR)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  text-transform: capitalize;
  margin-right: 2px;
  

  &:hover{
    cursor: pointer;
    opacity: .8;
  }
`;
