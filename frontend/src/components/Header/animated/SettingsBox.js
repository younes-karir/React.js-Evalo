
import {   useSelector } from "react-redux";
import { useTransition } from "react-spring";
import { animated } from "react-spring";
import styled from "styled-components";
import devices from "../../../helpers/Devices";

const SettingsBox = ({ children }) => {

  
  const showSettings = useSelector((state) => state.UI.showSettings);

  const SettingsTransition = useTransition(showSettings, {
    from: { height: 50, opacity: 0, y: -50 },
    enter: { height: 150, opacity: 1, y: 0 },
    leave: { height: 0, opacity: 0, y: -50 },
    config: {
      duration: 300,
    },
  });

  return SettingsTransition((style, item) =>
    item ? <Box   style={style}>{children}</Box> : ""
  );
};

const Box = styled(animated.div)`
  position: fixed;
  z-index: 99;
  right: 5px;
  top: 65px;
  height: 150px;
  width: 180px;
  background-color: ${(props) => props.theme.colors.background2};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  border-radius: 6px;
  padding: 1rem .0rem;
  
  overflow: hidden;

  @media ${devices.laptop} {
    right: 1rem;
  }
`;

export default SettingsBox;
