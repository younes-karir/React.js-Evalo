import styled from "styled-components";

import { IoEllipsisVertical } from "react-icons/io5";

export const QstWrapper = styled.div`
  position: relative;
  height: 8rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 6px;
  padding: 0.2rem 0rem 0rem 0rem;

  border-top: 8px solid ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: .3rem;
`;

export const Header = styled.div`
  width: 100%;
  height: 3rem;
  /* background-color: green; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditIconContainer = styled.div`
  width: 2rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0.5rem;
`;

export const Text = styled.h4``;

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EditIcon = styled(IoEllipsisVertical)`
  font-size: 1.5rem;

  &:hover{
      cursor: pointer;
      opacity: .8;
  }
`;
export const Body = styled.div`
  width: 100%;
  height: fit-content;
  padding: .5rem 0.6rem;
`;

export const ResponseContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props =>props.endline ? 'flex-end' : 'flex-start'};
  width: ${props => props.widthg};
  
`;

export const Label = styled.label`
  color: #03A678;
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: .5rem;
  /* font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
  
`;


export const Input = styled.input`
  font-size: 1.1rem;
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 6px 12px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;

export const Submit = styled.button`
  width: 80%;
  height: 2.5rem;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  /* background: linear-gradient(to right,  0%, ${(props) =>
    props.theme.colors.primary} 100%); */
  color: ${(props) => props.theme.colors.buttonText};

  &:hover &:not(:disabled) {
    cursor: pointer;
  }
  &:active  &:not(:disabled){
    opacity: 0.8;
  }


  &:disabled{
    background-color: gray;
    opacity: .5;
  }
`;
