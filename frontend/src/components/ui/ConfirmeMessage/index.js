import {
  Actions,
  ActionsWrapper,
  Body,
  CancelA,
  CloseIcon,
  CloseWarpper,
  ConfirmA,
  Container,
  Header,
  Message,
  MessageContanier,
  Title,
  TitleWrapper,
} from "./Message.elements";
import ReactDOM from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import { CloseConfirm, CloseConfirmYes } from "../../../store/actions/UI-Actions";
import Modal from "./animated/Modal";
import Wrapper from "./animated/Wrapper";
import store from "../../../store/Store";
import { Remove } from "../../../store/actions/exams";


const ModalConfirm = (props) => {
  const {title,text,logic} = useSelector(state => state.Confirm);

  const Dispatch = useDispatch()
  const YesConfirm =() =>{
    Dispatch(CloseConfirmYes());
    logic();
  }

  return (
    <Modal >
      <Wrapper>
        <Container>
          <Header>
            <TitleWrapper>
              <Title>{title}</Title>
            </TitleWrapper>
            <CloseWarpper>
              <CloseIcon onClick={props.onclose} />
            </CloseWarpper>
          </Header>
          <Body>
            <MessageContanier>
              <Message>{text}</Message>
            </MessageContanier>
          </Body>
          <Actions>
            <ActionsWrapper>
              <CancelA onClick={props.onclose}>Annuler</CancelA>
              <ConfirmA onClick={YesConfirm}>confirmer</ConfirmA>
            </ActionsWrapper>
          </Actions>
        </Container>
      </Wrapper>
    </Modal>
  );
};

const Confirm = () => {
  const dispatch = useDispatch();
  const CloseHandler = () => {
    dispatch(CloseConfirm());
  };

  return ReactDOM.createPortal(
    <ModalConfirm onclose={CloseHandler} />,
    document.getElementById("portal-root")
  );
};

export default Confirm;
