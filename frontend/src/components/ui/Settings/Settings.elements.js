import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import {GoCheck} from "react-icons/go";

export const Header = styled.div`
  height: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0rem 0.3rem 0rem 0.5rem;
`;

export const Content = styled.div`
  height: calc(100% - 2.5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
`;

export const Title = styled.h4`
  font-size: 0.855rem;
  font-family: Arial, Helvetica, sans-serif;
`;
export const CloseIcon = styled(IoIosArrowForward)`
  font-size: 1.4rem;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .5rem;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
  padding: 0rem 0.4rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


export const Label = styled.h5`
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.colors.text2};
`;

export const ColorPicker = styled.input`
  height: 1.4rem;
  width: 1.4rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  border: none;


  &::-webkit-color-swatch {
    border-radius: 4px;
    border: none;
    /* border: 1.5px solid ${props=> props.theme.colors.text2}; */
  }

  &::-webkit-color-swatch-wrapper {
    padding: 0rem;
  }
`;


export const Validate = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  padding: 1rem 0.5rem  0.5rem 0.5rem ;
`;

export const ValidIcon = styled(GoCheck)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  opacity: 0.7;


  &:hover{
    cursor: pointer;
    opacity: 1;


  }
  
`;