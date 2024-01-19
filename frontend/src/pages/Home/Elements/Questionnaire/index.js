import Position from "../../../../components/Position";

import {
  AddIcon,
  AddQstWrapper,
  AddWrapperIcon,
  CancelSearchIcon,
  Container,
  Item,
  ItemTitle,
  OldQstListContanier,
  QstHeaderContainer,
  QstHeaderWrapper,
  QstWrapper,
  RefreshIcon,
  SearchIcon,
  SearchInput,
  SearchInputWrapper,
  SearchWrapper,
  TextAdd,
  Title,
  TitleContainer,
  TitleWarpper,
} from "./Questionnaire.elements";
import { Fragment } from "react";
import AddQuestionnaire from "../../../../components/AddForms/AddQuestionnaire";
import { useDispatch } from "react-redux";
import { OpenAddQst } from "../../../../store/actions/UI-Actions";
import OldQstItem from "../../../../components/OldQstItem";
import Loading from "../../../../components/ui/Loading";

const Holder = (props) => {
  const dispatch = useDispatch();

  const OpenAddHandler = () => {
    dispatch(OpenAddQst());
  };

  return (
    <Container>
      <Position />
      <QstWrapper>
        <QstHeaderWrapper>
          <QstHeaderContainer>
            <TitleContainer>
              <Title>List des questionnaires</Title>
            </TitleContainer>
            <SearchWrapper>
              <TextAdd>Rechercher</TextAdd>
              <SearchInputWrapper>
                <SearchIcon></SearchIcon>
                <SearchInput />
                <CancelSearchIcon />
              </SearchInputWrapper>
            </SearchWrapper>
            <AddQstWrapper>
              <AddWrapperIcon>
                <TextAdd>Commencer</TextAdd>
                <AddIcon onClick={OpenAddHandler} />
                <AddQuestionnaire />
              </AddWrapperIcon>
              <AddWrapperIcon>
                <TextAdd>Actualiser</TextAdd>
                <RefreshIcon />
              </AddWrapperIcon>
            </AddQstWrapper>
          </QstHeaderContainer>
          <TitleWarpper>
            <Item>
              <ItemTitle>Exam</ItemTitle>
            </Item>
            <Item>
              <ItemTitle>Classe</ItemTitle>
            </Item>
            <Item>
              <ItemTitle>Questionnaire</ItemTitle>
            </Item>
          </TitleWarpper>
        </QstHeaderWrapper>
        <OldQstListContanier empty={true}>
          {[1,2,3,4,5,6,7,8,10,11,12,13,14,15].map((item) => {
            return <OldQstItem key={item} />;
          })}
          {/* <Loading /> */}
        </OldQstListContanier>
      </QstWrapper>
    </Container>
  );
};

const Questionnaire = () => {
  return (
    <Fragment>
      <Holder />
    </Fragment>
  );
};

export default Questionnaire;
