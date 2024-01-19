import ReactDOM from "react-dom";
import Modal from "./animated/Modal";
import Wrapper from "./animated/Wrapper";
import ItemsForm from "./ItemsForm/index";
import {
  AddFrom,
  Body,
  CloseIcon,
  CloseIconContainer,
  Group,
  Header,
  Input,
  Label,
  SubGroup,
  Submit,
  SubmitContainer,
  Title,
  TitleContainer,
} from "./AddQACM.elements";

import { CloseAddQACM } from "../../../../store/actions/UI-Actions";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Add, getAll } from "../../../../store/actions/questionACM";
import { select } from "../../../../store/actions/exams";

const Container = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  //form states
  const [Question, setQuestion] = useState("");
  const [Note, setNote] = useState(0);
  const [Items, setItems] = useState([]);

  // list of items actions
  const AddItemToList = (item) => {
    const newList = Items.concat(item);
    setItems(newList);
  };

  const RemoveItemFromList = (id) => {
    setItems(Items.filter((item) => item.id !== id));
  };

  const QuestionHandler = (event) => {
    setQuestion(event.target.value);
  };

  const NoteHandler = (event) => {
    setNote(event.target.value);
  };

  const CloseHandler = () => {
    dispatch(CloseAddQACM());
  };

  const AddQACMHandler = (event) => {
    event.preventDefault();
    const question = {
      exam: props.id,
      title: Question,
      note: Note,
      items: Items,
    };
    dispatch(Add(question));
  };

  return (
    <Modal>
      <Wrapper>
        <Header>
          <TitleContainer>
            <Title>Ajouter un question a choix multiple</Title>
          </TitleContainer>
          <CloseIconContainer>
            <CloseIcon onClick={CloseHandler} />
          </CloseIconContainer>
        </Header>
        <Body>
          <AddFrom onSubmit={AddQACMHandler}>
            <Group row="true" space={true}>
              <SubGroup width="90%">
                <Label>Question</Label>
                <Input
                  border={true}
                  type="text"
                  name="question"
                  value={Question}
                  onChange={QuestionHandler}
                />
              </SubGroup>
              <SubGroup width="10%">
                <Label>Note</Label>
                <Input
                  number={true}
                  type="number"
                  name="note"
                  value={Note}
                  onChange={NoteHandler}
                />
              </SubGroup>
            </Group>
            <Group space={true}>
              <ItemsForm
                list={Items}
                Add={AddItemToList}
                Remove={RemoveItemFromList}
              />
            </Group>
            <Group row="true" space={false}>
              <SubmitContainer>
                <Submit>{isLoading ? "en cours..." : "Ajouter"}</Submit>
              </SubmitContainer>
            </Group>
          </AddFrom>
        </Body>
      </Wrapper>
    </Modal>
  );
};

const AddQACM = (props) => {
  return ReactDOM.createPortal(
    <Container id={props.id} />,
    document.getElementById("portal-root")
  );
};

export default AddQACM;
