import styled from "styled-components";
import devices from "../../../helpers/Devices/index";

import { MdClose } from "react-icons/md";
import { keyframes } from "styled-components";

// icons
import { IoMdInformationCircleOutline as information } from "react-icons/io";

// animations

export const Container = styled.div`
  padding: .4rem 0rem .4rem 0rem;
  display: flex;
  flex-direction: column;
  gap: .4rem;
`;

export const Header = styled.div`
  height: fit-content;
  padding: 0rem 0rem 1rem 0rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TitleWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  padding-left: 0.5rem;
`;
export const Title = styled.h3`
  font-size: 1.2rem;
  /* color: ${props => props.theme.colors.primary}; */
`;
export const CloseWarpper = styled.div`
  height: fit-content;
  width: fit-content;
  margin-right: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CloseIcon = styled(MdClose)`
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.8;
  }
`;
export const Body = styled.div`
  height: fit-content;
  width: 100%;
  padding: 0.5rem .5rem;
`;
export const MessageContanier = styled.div`
  width: 100%;
  height: fit-content;
  padding: .5rem 0rem;
`;
export const Message = styled.p`
  font-size: 1rem;
`;
export const Actions = styled.div`
  padding: 0rem 0rem;
  display: flex;
  flex-direction: row-reverse;
`;

export const ActionsWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  gap: 5px;
  display: flex;
  flex-direction: row;
`;
export const CancelA = styled.button`
  width: 5rem;
  height: 2rem;
  padding: 0.4rem 0.2rem;
  border-radius: 4px;
  border: none;
  font-size: .9rem;
  font-weight: bold;
  background-color:  ${props => props.theme.colors.background};

  color: ${props => props.theme.colors.text};

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
  &:active {
    opacity: 0.8;
  }
`;
export const ConfirmA = styled.button`
  width: 5rem;
  height: 2rem;
  padding: 0.4rem 0.2rem;
  border-radius: 4px;
  border: none;
  font-size: .9rem;
  font-weight: bold;
  background-color: ${props => props.theme.colors.primary};
  color: white;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
  &:active {
    opacity: 0.8;
  }
`;
