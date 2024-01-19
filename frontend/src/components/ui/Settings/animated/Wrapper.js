import {  useSelector } from "react-redux";
import { useTransition } from "react-spring";
import { animated } from "react-spring";
import styled from "styled-components";


const Wrapper = ({ children }) => {
    const show = useSelector(state => state.UI.showSetting);

   const SettingsTransition = useTransition(show, {
    from: {x:200},
    enter: {x:0},
    leave: {x:200},
    config: {
      duration: 300,
    },
  });

  return SettingsTransition((style, item) =>
    item ? <Box onClick={null} style={style}>{children}</Box> : ""
  );
};

const Box = styled(animated.div)`
  height: fit-content;
  width:fit-content;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${props => props.theme.colors.background2};
  border-left: 4px solid ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding-right: 0.7rem;
`;

export default Wrapper;
