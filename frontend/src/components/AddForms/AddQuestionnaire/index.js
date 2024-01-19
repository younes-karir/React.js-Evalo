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
import { getAll as getAllE } from "../../../store/actions/exams";
import { getAll as getAllC } from "../../../store/actions/classes";

import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CloseAddQst } from "../../../store/actions/UI-Actions";
import { useState } from "react";
import { useEffect } from "react";
import SelectListExams from "./SelectList/SelectListExams";
import SelectListClasses from "./SelectList/SelectListClasses";
import TimeInput from "./TimeInput";
import { Start } from "../../../store/actions/questionnaire";

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
  let ExamsList = useSelector((state) => state.exam.list);
  let ClassList = useSelector((state) => state.class.list);

  const [SelectedExam, setSelectedExam] = useState();
  const [SelectedClass, setSelectedClass] = useState();
  const [Duree, setDuree] = useState("01:00");
  const [DateEX, setDateEX] = useState(getCurrentDate());

  useEffect(() => {
    dispatch(getAllE());
    dispatch(getAllC());
  }, [dispatch]);

  const CloseHandler = () => {
    dispatch(CloseAddQst());
  };

  const DateEXHandler = (event) => {
    setDateEX(event.target.value)
  }

  const AddClassHandler = (event) => {
    event.preventDefault();

    // convert to number of minutes

    let timing = Duree.split(":");
    timing = parseInt(timing[0] * 60) + parseInt(timing[1]);

    const Qst = {
      exam: SelectedExam.value,
      class: SelectedClass.value,
      duree: timing,
      dateX: DateEX
    };

   dispatch(Start(Qst));
  };

  return (
    <Modal>
      <Wrapper>
        <Header>
          <TitleContainer>
            <Title>Commencer un questionnaire</Title>
          </TitleContainer>
          <CloseIconContainer>
            <CloseIcon onClick={CloseHandler} />
          </CloseIconContainer>
        </Header>
        <Body>
          <AddFrom onSubmit={AddClassHandler}>
            <Group row="true" space={true}>
              <SubGroup width="50%">
                <Label>Exam</Label>
                <SelectListExams
                  list={ExamsList}
                  selected={SelectedExam}
                  setSelected={setSelectedExam}
                />
              </SubGroup>
              <SubGroup width="50%" space={true}>
                <Label>Classe</Label>
                <SelectListClasses
                  list={ClassList}
                  selected={SelectedClass}
                  setSelected={setSelectedClass}
                />
              </SubGroup>
            </Group>
            <Group row="true" space={true} small={false}>
              <SubGroup width="50%" space={true}>
                <Label>Date d'experation</Label>
                <Input
                  border={true}
                  type="date"
                  name="date"
                  placeholder="dd-mm-yyyy"
                  value={DateEX}
                  onChange={DateEXHandler}
                />
              </SubGroup>
              <SubGroup width="50%">
                <Label>Duree</Label>
                <TimeInput selected={Duree} setSelected={setDuree} />
              </SubGroup>
            </Group>
            <Group row="true">
              <SubmitContainer>
                <Submit>{isLoading ? "en cours..." : "Commencer"}</Submit>
              </SubmitContainer>
            </Group>
          </AddFrom>
        </Body>
      </Wrapper>
    </Modal>
  );
};

const AddQuestionnaire = () => {
  return ReactDOM.createPortal(
    <Container />,
    document.getElementById("portal-root")
  );
};

export default AddQuestionnaire;
