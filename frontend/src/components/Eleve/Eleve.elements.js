import styled from "styled-components";

import { IoClose } from "react-icons/io5";
import {HiOutlineMail} from "react-icons/hi"
import {TbPhone} from "react-icons/tb"

export const EleveConatnier = styled.div`
  height: 100%;
  width: 100%;
  min-width: 20rem;
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HeaderWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileWrapper = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileIcon = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin-top: 0.6rem;
  margin-left: 0.2rem;
`;

export const PersonalInfoWrapper = styled.div`
  width: 65%;
  height: 100%;
  padding: 0.9rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  gap: 0.5rem;
`;

export const Title = styled.h5`
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Data = styled.h5`
  font-size: 0.8rem;
  opacity: 0.7;
  letter-spacing: 1px;

`;

export const RemoveIcon = styled(IoClose)`
  font-size: 1.4rem;
  margin: 0.4rem 0.4rem 0rem 0rem;
  /* color: #7b7b7b; */

  &:hover {
    cursor: pointer;
    /* opacity: 0.8; */
  }

  &:active {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const BodyWrapper = styled.div`
  height: 65%;
  width: 100%;
  padding: .5rem .5rem 0rem 1rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: .5rem;
`;

export const InfoElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;


export const EmailIcon = styled(HiOutlineMail)`
  font-size:1.2rem;
  margin-right:1.5rem;
  color: ${props => props.theme.colors.primary};
`;
export const PhoneIcon = styled(TbPhone)`
  font-size:1.2rem;
  margin-right:1.5rem;
  color: ${props => props.theme.colors.primary};
`;