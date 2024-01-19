import styled from "styled-components";

import { animated } from "react-spring";



export const SideBarWrapper = styled(animated.div)`
  background-color: inherit;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileContainer  =styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .5rem;


`;

export const ProfileImgContainer = styled.div`
height: 3.3rem;
width:3.3rem;
border: solid white 2px;
overflow: hidden;
border-radius: 50%;
margin-right:.5rem;
margin-top:.5rem;


`;

export const ProfileImg = styled.img`
  height: 100%;
  width:100%;

`;

export const Name = styled.h3`

`;

