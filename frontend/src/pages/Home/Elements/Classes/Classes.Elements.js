import styled from "styled-components";
import devices from "../../../../helpers/Devices";

import { BiSearchAlt2 } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { BiAddToQueue } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";

const linesGenerate = (value) => {
  let number = value;
  let rest;
  while (rest !== 0) {
    rest = number % 3;
    if (rest !== 0) {
      number = number + (3 - rest);
    }
    return number / 3;
  }
};

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;

export const ClassWrapper = styled.div`
  width: 100%;
  /* background-color: transparent; */
  margin-top: 0.5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ClassHeaderContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const ClassHeader = styled.div`
  background-color: ${(props) => props.theme.colors.background2};
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border-left: solid 4px ${(props) => props.theme.colors.primary};
  padding: 0rem 0rem 0rem 1rem;
  display: flex;
  justify-content: space-between;
`;

export const HeaderActionContainer = styled.div`
  width: 40%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const SearchWrapper = styled.div`
  height: fit-content;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
`;

export const SearchInputWrapper = styled.div`
  height: 2.2rem;
  width: 100%;
  min-width: fit-content;
  background-color: ${(props) => props.theme.colors.InputBackground};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0.3rem;
  border-radius: 6px;
`;

export const TextSearch = styled.h4``;

export const SearchIcon = styled(BiSearchAlt2)`
  font-size: 1.25rem;
  opacity: 0.5;
`;

export const SearchInput = styled.input`
  width: calc(100% - 3.5rem);
  background-color: transparent;
  border: none;
  outline: none;

  font-weight: bold;
  color: gray;
`;

export const CancelSearchIcon = styled(GrFormClose)`
  font-size: 1.25rem;
  opacity: 0.5;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const AddWarpper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* justify-content: space-between; */
  margin-right: 1.5rem;
`;

export const TextAdd = styled.h4`

  `;

export const AddWrapperIcon = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const AddIcon = styled(BiAddToQueue)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const EditIcon = styled(BiEdit)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const HeaderInfoContainer = styled.div`
  width: 60%;
  min-width: 30rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
`;

export const Label = styled.h4`
  font-weight: bold;
  margin-right: 5px;
`;
export const Element = styled.p`
  font-size: medium;
  /* font-weight: bold; */
`;

export const ListContainer = styled.div`
  width: 100%;
  /* height: ${(props) => linesGenerate(props.listlength) * 20}rem; */
  display: ${props => props.test? 'flex' :'grid'};
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(10rem, auto);
  justify-items: center;
  gap: 0.5rem;

  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(10rem, auto);
  }
`;


export const EmptyListContanier = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem;
`;

export const EmptyList = styled.h4`
  color: ${(props) => props.theme.colors.text};
  font-size: inherit;
  opacity: 0.5;
`;

