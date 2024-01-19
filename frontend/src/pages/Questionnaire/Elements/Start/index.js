import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ClearFromQST,
  getAll,
  GetExam,
  SendPaper,
} from "../../../../store/actions/questionnaire";
import QuestionACM from "../Widgets/QuestionACM";
import {
  Base,
  ClearForm,
  Container,
  Description,
  Details,
  EmailContainer,
  Footer,
  Input,
  InputWrapper,
  Label,
  Logo,
  QstBody,
  QstHeader,
  QstNbrTitle,
  QuestionNumberWrapper,
  QuestionsNumber,
  Span,
  SubmitForm,
  ThemeSwitchContainer,
  TimerContainer,
  TimerWrapper,
  Title,
  TitleContainer,
  VerifieIcon,
  Wrapper,
} from "./Start.elements";

import Loading from "../../../../components/ui/Loading/index";
import Timing from "../Widgets/CountDown";
import ThemeSwitch from "../../../../components/ui/ThemeSwitch";

const Start = () => {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const [Clear, setClear] = useState(false);

  const isActive = useSelector((state) => state.questionnaire.isAcive);
  const Qst = useSelector((state) => state.questionnaire.questionnaire);
  const exam = useSelector((state) => state.questionnaire.exam);
  const questions = useSelector((state) => state.questionnaire.questions);
  const eleve = useSelector((state) => state.questionnaire.eleve);

  let Respones = [];

  const initialRespones = (list) => {
    Respones = list;
  };

  const ResponseHandler = (added) => {
    const obj = Respones.findIndex(
      (element) => element.question === added.question
    );
    Respones[obj] = added;
  };

  useEffect(() => {
    if (!isActive) {
      navigate("/questionnaire", {
        replace: true,
      });
    }
  }, [isActive, navigate]);

  useEffect(() => {
    if (Qst === "empty") {
      // when refresh
    } else if (exam === "empty") {
      Dispatch(GetExam(Qst.exam));
      console.log(exam);
    } else if (questions === "empty") {
      Dispatch(getAll(Qst.exam));
    } else {
      // console.log("All good");
    }
  }, [exam, Qst, questions, Dispatch]);

  const SendHandler = () => {
    const data = {
      questionnaire: Qst._id,
      eleve: eleve._id,
      lsitofanswers: Respones,
    };
    Dispatch(SendPaper(data));
  };

  const ClearHandlerOn = () => {
    Dispatch(ClearFromQST(Qst.exam));
  };

  return (
    <Container>
      <ThemeSwitchContainer>
        <ThemeSwitch />
      </ThemeSwitchContainer>
      <Wrapper>
        <QstHeader>
          <TitleContainer>
            <Title>{exam.titre}</Title>
            <Description>
              Toutes les soumissions à ce formulaire seront ajoutées dans un
              tableau sous forme de signatures dans le style de une lettre
              ouverte.
            </Description>
            <Details>
              <EmailContainer>
                <InputWrapper>
                  <Label>Email</Label>
                  <Input disabled placeholder="youneskarir@gmail.com" />
                </InputWrapper>
                <VerifieIcon />
              </EmailContainer>
              <TimerContainer>
                <QuestionNumberWrapper>
                  <QstNbrTitle>Nombre de Questions :</QstNbrTitle>
                  <QuestionsNumber>
                    {questions === "empty" ? "---" : questions.length}
                  </QuestionsNumber>
                </QuestionNumberWrapper>
                <TimerWrapper>
                  <Timing duree={Qst.duree} />
                </TimerWrapper>
              </TimerContainer>
            </Details>
          </TitleContainer>
        </QstHeader>
        <QstBody>
          {questions !== "empty" ? (
            questions.map((i) => {
              initialRespones(
                Respones.concat({
                  question: i._id,
                  reponse: [],
                })
              );
              return (
                <QuestionACM key={i._id} onAdd={ResponseHandler} data={i} />
              );
            })
          ) : (
            <Loading />
          )}
        </QstBody>
        <Footer>
          <ClearForm onClick={ClearHandlerOn}>Réinitialiser</ClearForm>
          <Logo>
            <Base>
              EVAL<Span>O</Span>
            </Base>
          </Logo>
          <SubmitForm Clear={Clear} onClick={SendHandler}>
            Envoyer
          </SubmitForm>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Start;
