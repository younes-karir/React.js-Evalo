import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import devices from "../../../../helpers/Devices";
import { useSelector } from "react-redux";

const SideBarContainer = ({ children }) => {
  const showMenu = useSelector((state) => state.UI.MobileSideBarContainer);

  const BoxTransition = useTransition(showMenu, {
    from: { x :-400 },
    enter: { x :0},
    leave: { x :-400},
    config: {
      duration: 300,
    },
  });

  return BoxTransition((style, item) => (item ? <Box style={style}>{children}</Box> : ""));
};

export default SideBarContainer;

const Box = styled(animated.div)`
  display: block;
  position: absolute;
  height: 100%;
  width: 60%;
  background-color: ${props  => props.theme.colors.background};
  z-index: 2;

  @media ${devices.laptop} {
    display: none;
  }
`;
