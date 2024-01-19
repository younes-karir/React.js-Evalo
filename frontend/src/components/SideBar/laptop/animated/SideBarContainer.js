import { useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import devices from "../../../../helpers/Devices";

const SideBarContainer = ({ children }) => {
  const LaptopSideBarMenu = useSelector((state) => state.UI.LaptopSideBarMenu);

  const springProps = useSpring({
    width: LaptopSideBarMenu ? "14rem" : "5rem",
    config: {
      duration: 300,
    },
  });

  return <Container style={{ width: springProps.width }}>{children}</Container>;
};

export default SideBarContainer;

const Container = styled(animated.div)`
  display: none;
  height: calc(100% - 60px);
  min-width: 5rem;
  padding: 0.2rem 0rem;
  position: fixed;
  z-index: 99;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  
  overflow: hidden;

  background-color: ${(props) => props.theme.colors.background2};

  @media ${devices.laptop} {
    display: block;
  }

  /* transition: background-color .3s linear; */

`;
