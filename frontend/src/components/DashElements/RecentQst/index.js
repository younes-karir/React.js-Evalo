import QstIcon from "./QstIcon";
import { BodyWrapper, Container, HeaderWrapper, Title } from "./RecentQst.elements";

const RecentQst = () => {
  return (
    <Container>
      <HeaderWrapper>
        <QstIcon />
        <Title>Questionnaire ajouté récemment</Title>
      </HeaderWrapper>
      <BodyWrapper></BodyWrapper>
    </Container>
  );
};

export default RecentQst;
