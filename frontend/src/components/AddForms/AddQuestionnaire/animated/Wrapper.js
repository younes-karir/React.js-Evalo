import {  useSelector } from "react-redux";
import { useTransition } from "react-spring";
import { animated } from "react-spring";
import styled from "styled-components";




const Wrapper = ({ children }) => {
  const show = useSelector(state => state.UI.addQst);

   const SettingsTransition = useTransition(show, {
    from: {y:-10},
    enter: {y:0},
    leave: {y:-10},
    config: {
      duration: 200,
    },
  });

  return SettingsTransition((style, item) =>
    item ? <Box onClick={null} style={style}>{children}</Box> : ""
  );
};

const Box = styled(animated.div)`
  position: relative;
  height: fit-content;
  top: -1.5rem;
  z-index:200;
  width: 50%;
  min-width: 40rem;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.background2};
  border-left: solid 4px ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
`;

export default Wrapper;
