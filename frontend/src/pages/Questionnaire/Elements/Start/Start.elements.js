import styled from "styled-components";

import { MdVerified } from "react-icons/md";

export const ThemeSwitchContainer = styled.div`
  position: absolute;
  right: 25px;
  top: 5px;

`;



export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Wrapper = styled.div`
  padding-top: 1rem;
  width: 65%;
  height: fit-content;
  /* max-width: 60rem; */
  min-width: 50rem;
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
`;
export const QstHeader = styled.div`
  width: 100%;
  height: fit-content;
  background-color: green;
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 8px;
  border-top: 6px solid ${(props) => props.theme.colors.primary};
  padding: 1rem 0.5rem 1rem 1.5rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

export const TitleContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;
export const Title = styled.h4`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.3rem;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors.text};
  opacity: 0.9;
`;

export const Description = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  line-height: 120%;
  letter-spacing: 0.5px;
`;

export const Details = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const EmailContainer = styled.div`
  width: 40%;
  padding: 0.5rem 1rem 0rem 0rem;
  display: flex;
  align-items: flex-end;
  gap: 0.7rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.4rem;
`;

export const Label = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text2};
  font-size: 0.95rem;
`;
export const Input = styled.input`
  width: fit-content;
  padding: 0.25rem 1rem;
  border-radius: 4px;
  border: solid 2px lightgray;
  background-color: ${(props) => props.theme.colors.background2};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

export const VerifieIcon = styled(MdVerified)`
  font-size: 1.5rem;
  margin-bottom: 3px;
  color: #00ae54;
`;

export const TimerContainer = styled.div`
  height: 100%;
  display: flex;
  width: 60%;
  flex-direction: row;
  padding-top: 0.5rem;
`;

export const QuestionNumberWrapper = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  padding-bottom: 0.8rem;
`;

export const QstNbrTitle = styled.h4`
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.colors.text2};
  font-size: 1.1rem;
`;
export const QuestionsNumber = styled.h5`
  color: gray;
  font-size: 1.2rem;
`;

export const TimerWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  gap: 1rem;
`;

export const Timing = styled.h3`
  margin-bottom: 0.2rem;
  color: ${(props) => props.theme.colors.primary};
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const QstBody = styled.div`
  margin-top: 0.8rem;
  /* padding: 0rem .5rem; */
  width: 100%;
  align-items: center;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  /* background-color: green; */
`;

export const Footer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.8rem 0rem 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ClearForm = styled.button`
  padding: 0.4rem 1rem 0.4rem 0.1rem;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  font-weight: bold;
  color: #4c4c4c;
  opacity: 0.8;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

export const SubmitForm = styled.button`
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  color: white;
  opacity: 0.8;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  opacity: 0.8;
  margin-right: 2rem;
`;

export const Base = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;
