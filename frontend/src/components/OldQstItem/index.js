import {
  ActionsWrapper,
  BodyWrapper,
  ClassInfo,
  Container,
  Data,
  Element,
  ExamInfo,
  Holder,
  IconWrapper,
  Label,
  OldIcon,
  Open,
  QstDetails,
  RemoveIcon,
} from "./OldQstItem.elements";

const OldQstItem = () => {
  return (
    <Container>
      <IconWrapper>
        <OldIcon />
      </IconWrapper>
      <BodyWrapper>
        <ExamInfo>
          <Element>
            <Label>Titre :</Label>
            <Data>Controle continu 10</Data>
          </Element>
          <Element>
            <Label>Date de creation :</Label>
            <Data>10/10/1000</Data>
          </Element>
        </ExamInfo>
        <ClassInfo>
          <Element>
            <Label>Nom :</Label>
            <Data>lettre</Data>
          </Element>
          <Element>
            <Label>Niveau :</Label>
            <Data>2 ème année Bac</Data>
          </Element>
        </ClassInfo>
        <QstDetails>
          <Element>
            <Label>Nombre des copies :</Label>
            <Data>10</Data>
          </Element>
          <Element>
            <Label>Date de creation :</Label>
            <Data>10/10/1000</Data>
          </Element>
        </QstDetails>
      </BodyWrapper>
      <ActionsWrapper>
        <Holder>
          <RemoveIcon />
          <Open />
        </Holder>
      </ActionsWrapper>
    </Container>
  );
};

export default OldQstItem;
