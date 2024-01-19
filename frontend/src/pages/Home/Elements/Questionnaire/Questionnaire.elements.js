import styled from "styled-components";

import { BiSearchAlt2 } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { MdLibraryAdd } from "react-icons/md";
import { RiRefreshLine } from "react-icons/ri";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;

export const QstWrapper = styled.div`
  width: 100%;
  /* background-color: transparent; */
  margin-top: 0.5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const QstHeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.background2};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-radius: 6px;
  border-top: solid 4px ${(props) => props.theme.colors.primary};
  padding: 0.5rem 2rem 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  height: 3.3rem;
`;

export const Title = styled.h4`
  /* text-transform: capitalize; */
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

export const SearchWrapper = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
`;

export const SearchIcon = styled(BiSearchAlt2)`
  font-size: 1.1rem;
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

export const CancelSearchIcon = styled(GrFormClose)`
  font-size: 1.25rem;
  opacity: 0.5;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const AddQstWrapper = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddWrapperIcon = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const AddIcon = styled(MdLibraryAdd)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const RefreshIcon = styled(RiRefreshLine)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primary};
  transition: transform 0.1s linear;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: rotate(40deg);
  }
`;

export const TextAdd = styled.h4`
  opacity: 0.7;
  flex-direction: column;
`;

export const OldQstListContanier = styled.div`
  width: 100%;
  height: fit-content;
  ${(props) => {
    if (props.empty) {
      return `
      display: flex;
      flex-direction: column;
      `;
    } else {
      return `
      display: grid;
      grid-template-columns: 1fr 1fr;`;
    }
  }}
  gap: 0.5rem;
`;

export const TitleWarpper = styled.div`
  height: 2.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background2};
  padding-left: 5.5rem;
  padding-right: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid ${props => props.theme.colors.primary};
  border-radius: 3px;
  gap: 3rem;
`;


export const QstHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow: hidden;
`;


export const Item = styled.div`
  height: 100%;
  width: calc(100% / 3);
  display: flex;
  align-items: center;
`;

export const ItemTitle = styled.h4`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.1rem;
  font-family:  sans-serif;

`;
