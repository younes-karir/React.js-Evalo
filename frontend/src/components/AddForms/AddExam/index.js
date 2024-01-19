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
} from "./AddExam.elements";
import Modal from "./animated/Modal";
import Wrapper from "./animated/Wrapper";

import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddExamClose } from "../../../store/actions/UI-Actions";
import { Add, getAll } from "../../../store/actions/exams";
import { useState } from "react";

function getCurrentDate() {
  const t = new Date();
  const date = ("0" + t.getDate()).slice(-2);
  const month = ("0" + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  return `${year}-${month}-${date}`;
}

const Container = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  const [Titre, setTitre] = useState("");
  const [Matiere, setMatiere] = useState("");
  const [DateC, setDateC] = useState(getCurrentDate());

  const TitreHandler = (event) => {
    setTitre(event.target.value);
  };
  const MatiereHandler = (event) => {
    setMatiere(event.target.value);
  };

  const DateCHandler = (event) => {
    setDateC(event.target.value);
  };
  const EditHeaderHandler = () => {
    dispatch(AddExamClose());
  };

  const AddExamHandler = (event) => {
    event.preventDefault();

    const Exam = {
      titre: Titre,
      matiere: Matiere,
      date: DateC,
    };
    dispatch(Add(Exam));
  };

  return (
    <Modal>
      <Wrapper>
        <Header>
          <TitleContainer>
            <Title>Ajouter un exam</Title>
          </TitleContainer>
          <CloseIconContainer>
            <CloseIcon onClick={EditHeaderHandler} />
          </CloseIconContainer>
        </Header>
        <Body>
          <AddFrom onSubmit={AddExamHandler}>
            <Group row="true" space={true}>
              <SubGroup width="50%">
                <Label>Titre</Label>
                <Input
                  type="text"
                  name="titre"
                  value={Titre}
                  onChange={TitreHandler}
                />
              </SubGroup>
              <SubGroup width="50%">
                <Label>Matière</Label>
                <Input
                  type="text"
                  name="matiere"
                  value={Matiere}
                  onChange={MatiereHandler}
                />
              </SubGroup>
            </Group>
            <Group row="true" space={true}>
              <SubGroup width="50%">
                <Label>Date de creation</Label>
                <Input
                  type="date"
                  name="date"
                  value={DateC}
                  placeholder="dd-mm-yyyy"
                  onChange={DateCHandler}
                />
              </SubGroup>
              <SubGroup width="50%"></SubGroup>
            </Group>
            <Group row="true">
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

const AddExam = () => {
  return ReactDOM.createPortal(
    <Container />,
    document.getElementById("portal-root")
  );
};

export default AddExam;
