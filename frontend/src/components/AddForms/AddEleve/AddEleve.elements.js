import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhone } from "react-icons/tb";

import { HiOutlineRefresh } from "react-icons/hi";

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

//form

export const AddFrom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0.5rem 0.5rem 0rem;
`;

export const Group = styled.div`
  display: flex;
  width: ${(props) => (props.info ? "50%" : "auto")};
  flex-direction: row;
  gap: ${(props) => (props.info ? "10px" : "8px")};
  align-items: ${(props) => (props.info ? "start" : "center")};
  justify-content: space-between;
`;

export const Label = styled.label`
  font-weight: bold;
  opacity: 0.7;
`;
export const Input = styled.input`
  font-size: 0.9rem;
  width: ${(props) => (props.info ? "80%" : "13rem")};
  height: 30px;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 6px 12px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 2px 0px, #9ab6e4 0px 0px 0px 1px;
  color: ${(props) => props.theme.colors.InputColor};
  background-color: ${(props) => props.theme.colors.InputBackground};
  opacity: ${(props) => (props.disabled ? ".5" : "1")};
`;

export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding-top: 1rem;
  /* padding: 1rem 1rem 1rem 0rem; */
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

export const PersoInfosWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  padding: 0rem 1rem;
  justify-content: space-between;
  
`;

export const ProfileWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  /* height: 100%; */
  /* background-color: antiquewhite; */
`;

export const ProfileIcon = styled.img`
  /* width: 7rem; */
  height: 6rem;
  padding: .5rem 0rem;
`;

export const ChangeWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.2rem 0.6rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const ChangeLabel = styled.h5`
  opacity: 0.7;
`;

export const ChangeIcon = styled(HiOutlineRefresh)`
  font-size: 1.3rem;
  opacity: 0.7;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: rotate(180deg);
  }
`;

export const DetailsWrapper = styled.div`
  /* padding: .6rem 0rem; */
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const ConatctWrapper = styled.div`
  width: 100%;
  padding: 0rem 1rem;
`;

export const ContactInfoWrapper = styled.div`
  /* background-color: green; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* gap: 1rem; */
`;

export const EmailIcon = styled(HiOutlineMail)`
  font-size: 1.5rem;
  opacity: 0.7;
  color: ${(props) => props.theme.colors.primary};
`;
export const PhoneIcon = styled(TbPhone)`
  font-size: 1.5rem;
  opacity: 0.7;
  color: ${(props) => props.theme.colors.primary};
`;
