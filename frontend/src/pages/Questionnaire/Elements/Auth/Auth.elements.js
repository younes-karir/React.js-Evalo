import styled from "styled-components";
import devices from "../../../../helpers/Devices";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 65%;
  max-width: 500px;

  @media ${devices.laptop} {
    max-width: 100%;
    height: 100%;    
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  justify-content: start;
  height: 15%;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Base = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  color: ${(props) => props.theme.colors.text};
  font-size: 2.8rem;
  letter-spacing: 2px;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const LoginBox = styled.form`
  background-color: ${(props) => props.theme.colors.background2};
  width: 90%;
  height: 80%;
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 2rem; */
  max-height: 420px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media ${devices.laptop} {
    max-width: 500px;
    padding: 2.5rem 2rem 2.5rem 2rem;
    height: 55%;
    width: 58%;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  /* margin-bottom: 1.5rem; */
`;

export const Title = styled.h3`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.5rem;
  text-transform: capitalize;
`;
export const Subtitle = styled.p`
  margin-top: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  text-transform: initial;
`;

// form

export const Group = styled.div`
  margin-bottom: 0rem;
`;

export const GroupLine = styled.div`
  margin-bottom: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const GroupS = styled.div`
  margin-bottom: 0rem;
  width: ${(props) => props.width};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text2};
`;
export const Input = styled.input`
  font-size: 1.1rem;
  width: 100%;
  height: 40px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: 4px;
  padding: 6px 12px;
  color: ${(props) => props.theme.colors.text2};
  letter-spacing: 0.5px;
  background-color: ${(props) => props.theme.colors.InputBackground};
  @media ${devices.laptop} {
    height: 40px;
  }
  &:focus-visible {
    outline-color: #5d6b7e96;
  }
`;

// export const Message = styled.p`
//   margin-top: 2px;
//   color: ${(props) => props.theme.colors.error};
//   font-size: 0.8rem;
// `;

// export const Point = styled.div`
// margin-right:5px;
// display: inline-block;
// height: .5rem;
// width: .5rem;
// border-radius: 50%;
// background-color: ${(props) => props.IsError ? props.theme.colors.error :  'transparent'} ;
// `;

export const Submit = styled.button`
  width: fit-content;
  height: 40px;
  border-radius: 4px;
  border: none;
  font-size: 1rem;
  padding: 0rem 1rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  /* background: linear-gradient(to right,  0%, ${(props) =>
    props.theme.colors.primary} 100%); */
  color: ${(props) => props.theme.colors.buttonText};

  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.8;
  }
`;

export const SignupWrapper = styled.div`
  text-align: center;
`;

export const SignupTitle = styled.p`
  font-size: 0.9rem;
  display: inline;
`;
export const SignupLink = styled(Link)`
  display: inline;
  margin-left: 2px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
