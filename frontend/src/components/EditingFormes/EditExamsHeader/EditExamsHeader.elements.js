import styled from "styled-components";

import { MdClose } from "react-icons/md";
import devices from "../../../helpers/Devices";

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
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #424242 ;
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
  padding: 1rem .5rem .5rem 1rem;
`;

//form

export const EditFrom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  gap: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: normal;
  color: ${(props) => props.theme.colors.text2};
`;
export const Input = styled.input`
  font-size: 1.1rem;
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 6px 12px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  @media ${devices.laptop} {
    height: 46px;
  }
`;

export const SubmitContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
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
  font-size: .9rem;
  font-weight: bold;
  background-color: ${props => props.theme.colors.primary};
  color: white;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
  &:active {
    opacity: 0.8;
  }
`;
