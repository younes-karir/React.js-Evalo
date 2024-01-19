import Modal from "./animated/Modal";
import Wrapper from "./animated/Wrapper";
import ReactDOM from "react-dom";
import {
  CloseIcon,
  ColorPicker,
  Container,
  Content,
  Element,
  Header,
  Label,
  Validate,
  ValidIcon,
} from "./Settings.elements";
import { useDispatch } from "react-redux";
import { SettingsToggleHide } from "../../../store/actions/UI-Actions";
import ThemeSwitch from "../ThemeSwitch";
import { OnColorChange } from "../../../store/actions/PrimaryActions";
import { useState } from "react";

const Setting = () => {
  const dispatch = useDispatch();

  const [Color, setColor] = useState("#0080FF");

  const ColorPickerHandler = (event) => {
    setColor(event.target.value);
  };

  const CloseHanlder = () => {
    dispatch(SettingsToggleHide());
  };

  const ColorHandler = () => {
    dispatch(OnColorChange(Color));
  };
  return (
    <Modal>
      <Wrapper>
        <Header>
          <CloseIcon onClick={CloseHanlder} />
        </Header>
        <Content>
          <Element>
            <Label>Thème</Label>
            <Container>
              <ThemeSwitch />
            </Container>
          </Element>
          <Element>
            <Label>Primaire</Label>
            <Container>
              <ColorPicker
                value={Color}
                onChange={ColorPickerHandler}
                type="color"
              />
            </Container>
          </Element>
        </Content>
        <Validate>
          <ValidIcon onClick={ColorHandler} />
        </Validate>
      </Wrapper>
    </Modal>
  );
};

const Settings = () => {
  return ReactDOM.createPortal(
    <Setting />,
    document.getElementById("portal-root")
  );
};

export default Settings;
