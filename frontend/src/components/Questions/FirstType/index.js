import { useDispatch } from "react-redux";
import { Remove } from "../../../store/actions/questionACM";
import { OpenConfirm } from "../../../store/actions/UI-Actions";
import Bottom from "../../../images/Logos/Bottom.QM";
import Top from "../../../images/Logos/Top.QM";
import {
  Body,
  Correct,
  EditContainer,
  EditIcon,
  Flesh,
  Header,
  ItemsContainer,
  ItemTitle,
  ItemWrapper,
  LabelText,
  ListContainer,
  ListWrapper,
  Note,
  QstConsigneWrapper,
  QstContainer,
  RemoveIcon,
  Text,
  TextContainer,
  Title,
  TitleContanier,
} from "./FirstType.elements";

const FirstType = (props) => {
  const dispatch = useDispatch()

  const RemoveHandler = () =>{
    dispatch(
      OpenConfirm({
        title: "Confirmation",
        text: "vous etes sure de supprimer cette question ?",
        logic: () => {
          dispatch(Remove(props.item,props.exam));
        },
      })
    );

  }


  return (
    <QstContainer>
      {!props.last && <Bottom />}
      {props.indexing !== 0 &&<Top  />}
      <Header>
        <TextContainer addspace={props.indexing !== 0 }>
          <LabelText >Question à choix multiple</LabelText>
        </TextContainer>
        <EditContainer>
          <EditIcon onClick={null} />
          <RemoveIcon onClick={RemoveHandler} />
        </EditContainer>
      </Header>
      <Body>
        <QstConsigneWrapper>
          <Title>Question </Title>
          <Flesh />
          <Text>{props.item.title + " ?"}</Text>
          <Note>{"(" + props.item.note + "pt)"}</Note>
        </QstConsigneWrapper>
        <ItemsContainer>
          <TitleContanier>
            <Title>Eléments de réponse </Title>
            <Flesh />
          </TitleContanier>
          <ListContainer>
            <ListWrapper>
              {props.item.items.map((item) => (
                <ItemWrapper key={item._id}>
                  {/* <Point /> */}
                  <ItemTitle>{item.title}</ItemTitle>
                  <Correct correct={item.correct}>
                    {item.correct ? "VRAI" : "FAUX"}
                  </Correct>
                </ItemWrapper>
              ))}
            </ListWrapper>
          </ListContainer>
        </ItemsContainer>
      </Body>
    </QstContainer>
  );
};

export default FirstType;
