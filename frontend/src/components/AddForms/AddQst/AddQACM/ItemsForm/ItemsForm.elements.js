import styled from "styled-components";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { keyframes } from "styled-components";

const Loadingg = keyframes`
  from {
       
  transform: rotate(0deg);
  }

  to {
       
  transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
  gap: 0.4rem;
`;
export const Header = styled.div`
  padding: 0.2rem 0rem 0.2rem 0rem;
`;
export const Title = styled.h4`
  text-transform: capitalize;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const AddForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
export const ItemTitleWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  padding: 0.1rem 0.5rem 0.1rem 0rem;
`;
export const ItemIsCorrectWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;
  padding: 0.1rem 0.5rem;
`;
export const ItemAddWrapperr = styled.div`
  width: fit-content;
`;
export const AddIcon = styled(MdOutlineAddCircleOutline)`
  font-size:1.82rem;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.3s;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.7;
    transform: rotate(90deg);
  }
`;

export const Label = styled.label`
  display: block;
  /* margin-bottom: 5px; */
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.7;
`;

export const InputText = styled.input`
  font-size: .9rem;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 6px 12px;
  letter-spacing: 0.5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 2px 0px, #9ab6e4 0px 0px 0px 1px;
  color: ${(props) => props.theme.colors.InputColor};
  background-color: ${(props) => props.theme.colors.InputBackground};
  opacity: ${props => props.disabled ? '.5' : '1'}; 
  border-left: 4px solid  #9ab6e4;
`;

export const InputCheck = styled.input`
  font-size: 1rem;
  height: 1.6rem;
  width: 1.6rem;

  border-radius: 4px;
  outline: none;
  padding: 2px 4px;
  color: ${(props) => props.theme.colors.text};
  background-color: white;
  border: 2px solid ${(props) => props.theme.colors.background};
  &:hover {
    cursor: pointer;
  }
`;

export const ListOfItems = styled.div`
  padding-top: 1rem;
  height: fit-content;
  max-height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-right: 1rem; */
  border-left: 8px solid gray;
  background-color: #c6c6c68f;
  border-radius: 6px;
  gap: 0.5rem;
  padding: 0.2rem 0.6rem;
`;
export const ItemTitle = styled.h4`
  width: 15rem;
  font-weight: normal;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Correct = styled.h4`
  /* color: ${(props) => (props.correct ? "green" : "red")}; */
  color: gray;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 3rem;
`;

export const RemoveIcon = styled(IoClose)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    cursor: pointer;
    opacity: 80%;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Loading = styled.div`
  display: ${(props) => (props.isLoading ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 3rem;
`;

export const Span = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.colors.primary};
  border-left-color: transparent;
  animation: ${Loadingg} 1s infinite ease-out;
`;
