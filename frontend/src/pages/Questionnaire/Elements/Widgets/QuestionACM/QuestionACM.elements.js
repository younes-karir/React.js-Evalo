import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.background2};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1rem 0.5rem 1rem;
`;

export const QuestionTitle = styled.h3`
    font-size:1rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: .5px;
    &::first-letter {
        text-transform: capitalize;
    }
`;

export const Note = styled.p`
    color: green;
    font-weight: bold;
`;


export const Body = styled.div`
  width: 100%;
  height: fit-content;
  padding-left: 2rem;
`;

export const ItemsWrapper = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 1rem;

`;

export const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
   
    gap: 1rem;
`;

export const Label = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color:  ${props=>props.theme.colors.text};
    opacity: 0.8;
    font-size: .95rem;
    letter-spacing: .5px;
    &::first-letter {
        text-transform: capitalize;
    }
    
`;

export const Check = styled.input`
    height: 1.3rem;
    width: 1.3rem;


    &:hover{
        cursor: pointer;

    }

`;

