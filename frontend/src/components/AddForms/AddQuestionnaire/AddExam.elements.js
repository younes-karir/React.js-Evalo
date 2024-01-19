import styled from "styled-components";
import { MdClose } from "react-icons/md";
import devices from "../../../helpers/Devices/index";

export const Header = styled.div`
  width: 100%;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.3rem;
  padding: 0.5rem;
  border-bottom: solid 2px ${(props) => props.theme.colors.background};
`;
export const TitleContainer = styled.div``;
export const CloseIconContainer = styled.div``;

export const Title = styled.h3`
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #424242;
`;
export const CloseIcon = styled(MdClose)`
  font-size: 1.4rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Body = styled.div`
  padding: 1rem 0.5rem 0.5rem 0rem;
`;

//form

export const AddFrom = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: .5rem; */
`;

export const SubGroup = styled.div`
  width: ${(props) => props.width};

  /* &:last-child{
      margin-left: 1rem;
    } */
`;
export const Group = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.space ? " 0.5rem 1rem" : "0rem 0rem")};
  gap: 2rem;
  /* justify-content: space-between; */
  justify-content: ${props => props.small ? 'center' : 'space-between'};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.7;
`;
export const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  height: 32px;
  border: none;
  border-left: solid 4px #9ab6e4 ; 
  border-radius: 4px;
  outline: none;
  padding: 6px 12px;
  letter-spacing: 0.5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 2px 0px, #9ab6e4 0px 0px 0px 1px;
  color: ${(props) => props.theme.colors.InputColor};
  background-color: ${(props) => props.theme.colors.InputBackground};
  opacity: ${(props) => (props.disabled ? ".5" : "1")};
`;

export const SubmitContainer = styled.div`
  width: 100%;
  margin-top: 0.7rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
export const Submit = styled.button`
  width: fit-content;
  height: 2rem;
  padding: 0.4rem 0.4rem;
  border-radius: 3px;
  border: none;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.8;
  }
`;
