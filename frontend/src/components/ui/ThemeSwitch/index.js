import {
  Container,
  Dark,
  Holder,
  Light,
  Wrapper,
} from "./ThemeSwitch.elements";
import { useDispatch, useSelector } from "react-redux";
import { ThemeToggleDark, ThemeToggleLight } from "../../../store/actions/UI-Actions";

const ThemeSwitch = () => {
  const thiming = useSelector((state) => state.theme.lightTheme);
  const dispatch = useDispatch();

  const LightHandler = () => {
    dispatch(ThemeToggleLight());
  };

  const DarkHandler = () => {
    dispatch(ThemeToggleDark());
  };
  return (
    <Container>
      <Wrapper light={thiming}>
        <Holder>{thiming.title === "light" ?  <Dark onClick={DarkHandler} /> : <Light onClick={LightHandler} /> }</Holder>
      </Wrapper>
    </Container>
  );
};

export default ThemeSwitch;
