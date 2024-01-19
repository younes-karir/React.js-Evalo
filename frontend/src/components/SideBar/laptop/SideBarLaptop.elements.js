import styled from "styled-components";
import devices from "../../../helpers/Devices";
import { NavLink } from "react-router-dom";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { MdOutlineSchool } from "react-icons/md";
export const SideBarContainer = styled.div`
  display: none;
  grid-area: menu;
  height: 100%;
  width: 5rem;
  background-color: ${(props) => props.theme.colors.background2};

  @media ${devices.laptop} {
    display: block;
  }
`;

export const SideBarWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.background2};
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 0.5rem;
`;

export const TitleContainer = styled.div`
  padding: 5px 10px;
  display: ${(props) => (props.$opened ? "block" : "none")};
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h4`
  font-size: 1rem;
`;

export const LinkContanier = styled(NavLink)`
  padding: 5px 10px;
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  margin-left: ${(props) => (props.$opened ? "1.5rem" : "0rem")};
  margin-top: ${(props) => (props.$opened ? "0rem" : "1rem")};
  transition: margin-left 0.3s;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  font-weight: normal;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$opened ? "column" : "row")};
  justify-content: center;
`;

export const DashIcon = styled(MdOutlineDashboardCustomize)`
  height: 2rem;
  width: 2rem;
  margin-right: 10px;
  margin-left: 3px;
  color: ${(props) =>
    props.$actived ? props.theme.colors.primary : props.theme.colors.text};
`;

export const ExamsIcon = styled(RiFileList2Line)`
  height: 2rem;
  width: 2rem;
  margin-right: 10px;
  margin-left: 3px;
  color: ${(props) =>
    props.$actived ? props.theme.colors.primary : props.theme.colors.text};
`;

export const DashLink = styled.h4`
  display: ${(props) => (props.$opened ? "block" : "none")};
  text-decoration: none;
  color: ${(props) =>
    props.actived ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: bold;
`;

export const ExamsLink = styled.h4`
  display: ${(props) => (props.$opened ? "block" : "none")};
  text-decoration: none;
  color: ${(props) =>
    props.actived ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: normal;
`;

export const ClassIcon = styled(MdOutlineSchool)`
  height: 2.2rem;
  width: 2.2rem;
  margin-right: 10px;
  margin-left: 3px;
  color: ${(props) =>
    props.$actived ? props.theme.colors.primary : props.theme.colors.text};
`;

export const PlayIcon = styled.img`
  height: 2rem;
  width: 2rem;
  margin-right: 10px;
  margin-left: 3px;
  color: ${(props) =>
    props.actived ? props.theme.colors.primary : props.theme.colors.text};
`;
