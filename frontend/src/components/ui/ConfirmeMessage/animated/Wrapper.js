import { useDispatch, useSelector } from "react-redux";
import { useTransition } from "react-spring";
import { animated } from "react-spring";
import styled from "styled-components";


const Wrapper = ({ children }) => {
    const show = useSelector(state => state.Confirm.showConfirm);

   const SettingsTransition = useTransition(show, {
    from: {y:0},
    enter: {y:0},
    leave: {y:0},
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
  padding: .4rem .5rem .4rem .5rem  ;
  z-index:200;
  width: 60%;
  max-width: 30rem;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.background2};
  border-left: 8px solid ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default Wrapper;
