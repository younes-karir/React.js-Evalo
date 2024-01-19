import styled from "styled-components";

import { HiOutlineMail } from "react-icons/hi";
import { HiPencilAlt } from "react-icons/hi";

export const ProfileWarpper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.6rem;
`;
export const ProfileHeader = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.h4`
  margin-left: 1rem;
`;
export const ProfileBody = styled.div`
  height: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProfilePicContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: .5rem; */
`;

export const ImageWrapper = styled.div`
  height: fit-content;
  width: 8rem;
  border-radius: 50%;
  position: relative;
`;

export const Image = styled.img`
  height: 7rem;
  width: 7rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 50%;
`;

export const ProfileDetailsContainer = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 0.2rem 0.1rem;
  padding-top: 2rem;
`;
export const InfoItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0rem;
`;

export const LabelText = styled.h4`
  width: 20%;
  min-width: 4rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  opacity: 0.6;
  color: ${(props) => props.theme.colors.primary};
`;

export const EmailIcon = styled(HiOutlineMail)`
  font-size: 1.55rem;
  opacity: 0.6;
  color: ${(props) => props.theme.colors.primary};
`;

export const InfoText = styled.h4`
  width: 70%;
  font-size: 0.9rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;

export const EditPic = styled(HiPencilAlt)`
  font-size: 1.8rem;
  position: absolute;
  bottom: 3%;
  right: 0%;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.8s;
  transition: transform  0.3s ;

  &:hover{
    cursor: pointer;
    opacity: 0.85;
  }

  &:active{
    transform: scale(1.05);
    opacity: 1;
  }

`;
