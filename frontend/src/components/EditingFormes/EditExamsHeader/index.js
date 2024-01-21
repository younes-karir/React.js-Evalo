import Modal from "./animated/Modal";
import ReactDOM from "react-dom";
import Wrapper from "./animated/Wrapper";
import {
  Body,
  CloseIcon,
  CloseIconContainer,
  EditFrom,
  Group,
  Header,
  Input,
  Label,
  SubGroup,
  Submit,
  SubmitContainer,
  Title,
  TitleContainer,
} from "./EditExamsHeader.elements";
import { useDispatch } from "react-redux";
import { CloseEditExam } from "../../../store/actions/UI-Actions";

const Container = () => {
  const Dispatch = useDispatch();

  const EditHeaderHandler = () => {
    Dispatch(CloseEditExam());
  };

  return (
    <Modal>
      <Wrapper>
        <Header>
          <TitleContainer>
            <Title>Modification</Title>
          </TitleContainer>
          <CloseIconContainer>
            <CloseIcon onClick={EditHeaderHandler} />
          </CloseIconContainer>
        </Header>
        <Body>
          <EditFrom>
            <Group row="true">
              <SubGroup width="50%">
                <Label>Titre</Label>
                <Input type="text" />
              </SubGroup>
              <SubGroup width="50%">
                <Label>Matière</Label>
                <Input type="text" />
              </SubGroup>
            </Group>
            <Group row="true">
              <SubGroup width="50%">
                <Label>Note</Label>
                <Input type="text" />
              </SubGroup>
              <SubGroup width="50%">
                <Label>Date de creation</Label>
                <Input type="date" />
              </SubGroup>
            </Group> 
            <Group row="true">
              <SubmitContainer>
                <Submit>Modifier</Submit>
              </SubmitContainer>
            </Group>
          </EditFrom>
        </Body>
      </Wrapper>
    </Modal>
  );
};

const EditExamsHeader = () => {
  return ReactDOM.createPortal(
    <Container />,
    document.getElementById("portal-root")
  );
};

export default EditExamsHeader;
