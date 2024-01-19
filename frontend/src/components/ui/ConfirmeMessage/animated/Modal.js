import { useDispatch, useSelector } from "react-redux";
import { useTransition } from "react-spring";
import { animated } from "react-spring";
import styled from "styled-components";



const Modal = ({ children,...props }) => {
    const show = useSelector(state => state.Confirm.showConfirm);

  const SettingsTransition = useTransition(show, {
    from: {opacity:0},
    enter: {opacity:1},
    leave: {opacity:0},
    config: {
      duration: 150,
    },
  });

  return SettingsTransition((style, item) =>
    item ? <Box onClick={null} style={style}>{children}</Box> : ""
  );
};

const Box = styled(animated.div)`
  position: fixed;
  z-index: 101;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgba(0,0,0,.6);
`;

export default Modal;
