import styled from "styled-components";

import {Link} from 'react-router-dom';

import { IoMenu, IoEllipsisVertical, IoChevronForward } from "react-icons/io5";
import {IoIosArrowBack} from 'react-icons/io';

import devices from "../../helpers/Devices";

export const HeaderWrapper = styled.header`
  position: fixed;
  grid-area: "header";
  z-index: 100;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background2};
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  
`;

export const HeaderContainer = styled.div`
  width: 95%;
  height: 100%;
  padding: 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${devices.laptop} {
    width: 100%;
    padding:0px 1rem 0rem 0rem;
  }
`;

export const MenuIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:3rem;

  @media ${devices.laptop}{

    width: 5rem;
  }
`;

export const MobileMenu = styled(IoMenu)`
  height: 2.8rem;
  width: 2.8rem;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media ${devices.laptop} {
    display: none;
  }
`;

export const LaptopMenu = styled(IoMenu)`
  display: none;
  height: 2.55rem;
  width: 2.55rem;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media ${devices.laptop} {
    display: block;
  }
`;

export const LaptopMenuClose = styled(IoIosArrowBack)`
  display: none;
  height: 2rem;
  width: 2rem;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media ${devices.laptop} {
    display: block;
  }
`;

export const MobileMenuClose = styled(IoIosArrowBack)`
  display: block;
  height: 2rem;
  width: 2rem;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media ${devices.laptop} {
    display: none;
  }
`;


export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.laptop} {
    justify-content: flex-start;
  }
`;

export const Base = styled.h3`
  font-family: "Source Sans Pro", sans-serif;
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  letter-spacing: 2px;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const SettingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${devices.laptop} {
    display: none;
  }

`;

export const SettingIcon = styled(IoEllipsisVertical)`
  height: 2rem;
  width: 2rem;
  color: ${(props) => props.theme.colors.text};

  @media ${devices.laptop} {
    height: 1.4rem;
    width: 1.4rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ProfileWrapper = styled.div`
  display: none;
  width: fit-content;
  height: 100%;

  @media ${devices.laptop} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const ProfileImgContainer = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.5rem;
  /* box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.3); */
`;

export const ProfileImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const ProfileNameContainer = styled.div`
  width: fit-content;
  padding-left: 10px;
`;

export const Name = styled.h2`
  font-size: 1rem;
`;

export const ListIconConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  /* height: 80%; */
`;

export const ListIcon = styled(IoChevronForward)`
  font-size: 1.2rem;
  transform: rotate(90deg);
  /* font-weight: bold; */
  margin-left: 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ListIconClose = styled(IoChevronForward)`
  font-size: 1.2rem;
  transform: rotate(-90deg);
  /* font-weight: bold; */
  margin-left: 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;


export const SettingElemets  =styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: .5rem;
`;


export const Item = styled(Link)`
  width: 100%;
  height: 50%;
  text-decoration: none;
  text-align: left;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: ${props => props.theme.colors.text};


  &:hover{
    background-color: ${props => props.theme.colors.background};
  }

`;

export const ItemN = styled.div`
  width: 100%;
  height: 50%;
  text-decoration: none;
  text-align: left;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: ${props => props.theme.colors.text};


  &:hover{
    background-color: ${props => props.theme.colors.background};
    cursor: pointer;
  }

`;

export const LinkContainer = styled.h4`

`;
