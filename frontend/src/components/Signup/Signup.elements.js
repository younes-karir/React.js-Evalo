import styled from "styled-components";
import devices from "../../helpers/Devices/index";
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
  height: 80%;
  max-width: 500px;

  @media ${devices.laptop} {
    max-width: 550px;
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
  height: 15%;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Base = styled.h3`
  font-family: "Source Sans Pro", sans-serif;
  color: ${(props) => props.theme.colors.text};
  font-size: 2.8rem;
  letter-spacing: 2px;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const SignupBox = styled.form`
  background-color: ${(props) => props.theme.colors.background2};
  width: 95%;
  height: 80%;
  border-radius: 8px;
  padding: .5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 460px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  @media ${devices.laptop} {
    max-width: 500px;
    padding: .8rem 2rem;
  }

  @media ${devices.tablet} {
    max-width: 600px;
    padding: .8rem 2rem;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: .1rem;
`;

export const Title = styled.h3`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.5rem;
`;
export const Subtitle = styled.p`
  margin-top: 4px;
  font-family: Arial, Helvetica, sans-serif;
`;

// form

export const SubGroup = styled.div`
  width: ${props => props.width};
  
    /* &:last-child{
      margin-left: 1rem;
    } */

`;
export const Group = styled.div`
    display: flex;
    flex-direction: ${props=>props.row ? 'row' : 'column'};
    gap: 1rem;


`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: .9rem;
  font-weight: normal;
  color: ${(props) => props.iserr? '#ff6e6e' : props.theme.colors.text};
`;
export const Input = styled.input`
  font-size: 1.1rem;
  width: 100%;
  height: 46px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: ${props => props.iserr ? '#ff6e6e' : 'transparent'};
  border-radius: 4px;
  /* outline: none; */
  padding: 6px 12px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  @media ${devices.laptop} {
    height: 46px;
  }

  &:focus-visible{
    outline-color: gray;
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
  width: 100%;
  height: 3rem;
  border-radius: 6px;
  border: none;
  font-size: 1.2rem;
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
