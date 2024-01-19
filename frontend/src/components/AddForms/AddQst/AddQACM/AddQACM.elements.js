import styled from "styled-components";
import { MdClose } from "react-icons/md";

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
  /* gap: 1rem; */
  /* padding: 2rem 0.5rem 0.5rem 0rem; */
`;

export const SubGroup = styled.div`
  width: ${(props) => props.width};
  min-width: min-content;

`;
export const Group = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding:  ${props => props.space ? ' 0.5rem 1rem' : '0rem 0rem'};
  gap: 1rem;
  
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
  border-radius: 4px;
  outline: none;
  padding: ${props => props.number? '3px 4px 3px 12px' : '6px 12px'};
  letter-spacing: 0.5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 2px 0px, #9ab6e4 0px 0px 0px 1px;
  color: ${(props) => props.theme.colors.InputColor};
  background-color: ${(props) => props.theme.colors.InputBackground};
  opacity: ${props => props.disabled ? '.5' : '1'}; 
  border-left: ${props => props.border ? '4px solid  #9ab6e4' : 'none'};
  border-right: ${props => props.number ? '4px solid  #9ab6e4' : 'none'};
`;

export const SubmitContainer = styled.div`
  width: 100%;
  /* margin-top: 1rem; */
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
export const Submit = styled.button`
  width: 5rem;
  height: 2rem;
  padding: 0.4rem 0.2rem;
  border-radius: 4px;
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
