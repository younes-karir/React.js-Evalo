import styled from "styled-components";

import { FiEdit } from "react-icons/fi";
import { BiPlusMedical } from "react-icons/bi";

import devices from "../../../../helpers/Devices/index";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;

export const ExamsWrapper = styled.div`
  width: 100%;
  background-color: transparent;
  margin-top: 0.5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ExamsHeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const ExamsHeader = styled.div`
  background-color: ${(props) => props.theme.colors.background2};
  width: 80%;
  height: 100%;
  border-radius: 4px;
  border-left: solid 4px ${(props) => props.theme.colors.primary};
  padding: 0rem 0rem 0rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HeaderGroup = styled.div`
  width: 95%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  position: relative;

  @media ${devices.laptop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
  }
`;

export const EditContainer = styled.div`
  width: fit-content;
`;

export const EditIcon = styled(FiEdit)`
  margin-top: 6px;
  margin-right: 6px;
  font-size: 1.4rem;
  color: #7b7b7b;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 1rem 0.5rem;
`;

export const Label = styled.h4`
  font-weight: bold;
  margin-right: 5px;
`;
export const Element = styled.p`
  font-size: medium;
  /* font-weight: bold; */
`;

export const AddTitleWarpper = styled.div``;
export const AddTitle = styled.h4``;

export const AddContanier = styled.div`
  width: 20%;
  min-width: 10rem;
  border-radius: 4px;
  border-top: solid 4px ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background2};
  padding: 0.8rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const AddWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsContainer = styled.div`
  width: 80%;
`;
export const AddIcon = styled(BiPlusMedical)`
  font-size: 1.8rem;
  color: ${(props) => (!props.disabled ? props.theme.colors.primary : "gray")};

  transition: all 0.3s;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:active {
    opacity: 0.8;
    transform: rotate(90deg);
  }
`;

export const ListContainer = styled.div`
  /* background-color: ${(props) => props.theme.colors.background2}; */
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ListWrapper = styled.div`
  width: 80%;
  padding-right: 0.4rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
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
