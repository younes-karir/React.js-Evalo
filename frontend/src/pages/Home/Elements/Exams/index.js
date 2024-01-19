import Position from "../../../../components/Position";
import {
  AddContanier,
  AddIcon,
  AddTitle,
  AddTitleWarpper,
  AddWrapper,
  Container,
  EditContainer,
  EditIcon,
  Element,
  ElementContainer,
  EmptyList,
  EmptyListContanier,
  ExamsHeader,
  ExamsHeaderContainer,
  ExamsWrapper,
  HeaderGroup,
  Label,
  ListContainer,
  ListWrapper,
  OptionsContainer,
} from "./Exams.elements";

import { useDispatch, useSelector } from "react-redux";
import EditExamsHeader from "../../../../components/EditingFormes/EditExamsHeader";
import FirstType from "../../../../components/Questions/FirstType";
import { useParams } from "react-router-dom";
import Loading from "../../../../components/ui/Loading";
import { useEffect } from "react";
import { getAll, select } from "../../../../store/actions/exams";
import { getAll as getAllQ } from "../../../../store/actions/questionACM";
import {
  OpenAddQACM,
  OpenEditExam,
} from "../../../../store/actions/UI-Actions";
import SelectList from "../../../../components/ui/SelectList";
import { Fragment } from "react";
import { useState } from "react";
import AddQACM from "../../../../components/AddForms/AddQst/AddQACM";

const Exam = (props) => {
  const dispatch = useDispatch();
  const [Selected, setSelected] = useState({
    label: "à choix multiple",
    value: 1,
  });

  const EditExamHandler = (event) => {
    dispatch(OpenEditExam());
  };

  const AddHandler = (event) => {
    event.preventDefault();
    if (Selected.value === 1) {
      dispatch(OpenAddQACM());
    } else if (Selected.value === 2) {
      // console.log('question a choix simple');
    } else {
      // console.log('rien')
    }
  };

  return (
    <Container>
      <Position />
      <ExamsWrapper>
        <ExamsHeaderContainer>
          <ExamsHeader>
            <HeaderGroup>
              <ElementContainer>
                <Label>Titre :</Label>
                <Element>{props.exam.titre}</Element>
              </ElementContainer>
              <ElementContainer>
                <Label>Matière :</Label>
                <Element>{props.exam.matiere}</Element>
              </ElementContainer>
              <ElementContainer>
                <Label>Nombre de questions :</Label>
                <Element>{props.isLoading ? '...' : props.questions.length}</Element>
              </ElementContainer>
              <ElementContainer>
                <Label>Date de creation :</Label>
                <Element>{props.exam.date}</Element>
              </ElementContainer>
            </HeaderGroup>
            <EditContainer>
              <EditIcon onClick={EditExamHandler} />
              <EditExamsHeader />
            </EditContainer>
          </ExamsHeader>
          <AddContanier>
            <AddTitleWarpper>
              <AddTitle>Ajouter</AddTitle>
            </AddTitleWarpper>
            <AddWrapper>
              <OptionsContainer>
                <SelectList selected={Selected} setSelected={setSelected} />
              </OptionsContainer>
              <AddIcon onClick={AddHandler} />
              <AddQACM id={props.exam._id} />
            </AddWrapper>
          </AddContanier>
        </ExamsHeaderContainer>
        <ListContainer>
          <ListWrapper>
            {props.isLoading ? (
              <Loading />
            ) : props.questions.length === 0 ? (
              <EmptyListContanier>
                <EmptyList>liste des questions est vide!</EmptyList>
              </EmptyListContanier>
            ) : (
              props.questions.map((item , i) => {
                return (
                  <FirstType key={item._id} indexing={i} last={i===(props.questions.length-1) } exam={props.exam._id} item={item} />
                );
              })
            )}
          </ListWrapper>
        </ListContainer>
      </ExamsWrapper>
    </Container>
  );
};

const Exams = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const exam = useSelector((state) => state.exam.selected);
  const list = useSelector((state) => state.exam.list);
  const isLoading = useSelector(state => state.loading.isLoading);
  const QuestionACMList = useSelector((state) => state.QuestionACM.list);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(getAll(true));
    } else if (!exam.titre) {
      dispatch(select(id));
    } else if (QuestionACMList === "empty") {
      dispatch(getAllQ(exam._id));
      // console.log('getting questions from '+exam.titre);
    } else {
      // console.log("all good");
    }
  }, [list, exam, dispatch, QuestionACMList, id]);

  return (
    <Fragment>
      {exam.titre ? (
        <Exam
          exam={exam}
          questions={QuestionACMList}
          isLoading={QuestionACMList === "empty" || isLoading }
        />
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default Exams;
