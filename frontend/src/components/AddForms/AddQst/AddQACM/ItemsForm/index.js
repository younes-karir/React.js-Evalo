import {  useState } from "react";
import {
  AddForm,
  AddIcon,
  Body,
  Container,
  Correct,
  Header,
  InputCheck,
  InputText,
  ItemAddWrapperr,
  ItemIsCorrectWrapper,
  ItemTitle,
  ItemTitleWrapper,
  ItemWrapper,
  Label,
  ListOfItems,
  Loading,
  RemoveIcon,
  Span,
  Title,
} from "./ItemsForm.elements";

function revisedRandId() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(2, 10);
}

const ItemsForm = (props) => {
  const [FORMTitle, setFORMTitle] = useState("");
  const [FORMCorrect, setFORMCorrect] = useState(false);


  const TitleHandler = (event) => {
    setFORMTitle(event.target.value);
  };

  const CorrectHandler = (event) => {
    setFORMCorrect(event.target.checked);
  };

  const AddItemHandler = () => {
    const Added = {
      id: revisedRandId(),
      title: FORMTitle,
      correct: FORMCorrect,
    };

    props.Add(Added);
  };

  const Remove = (id) => {
    props.Remove(id);
  };

  return (
    <Container>
      <Header>
        <Title>Elements de reponse</Title>
      </Header>
      <Body>
        <AddForm>
          <ItemTitleWrapper>
            <Label>Item</Label>
            <InputText type="text" value={FORMTitle} onChange={TitleHandler} />
          </ItemTitleWrapper>
          <ItemIsCorrectWrapper>
            <Label>VRAI</Label>
            <InputCheck
              type="checkbox"
              value={FORMCorrect}
              onChange={CorrectHandler}
            />
          </ItemIsCorrectWrapper>
          <ItemAddWrapperr>
            <AddIcon onClick={AddItemHandler} />
          </ItemAddWrapperr>
        </AddForm>
        <ListOfItems>
          {props.list.map((item) => (
            <ItemWrapper key={item.id}>
              {/* <Point /> */}
              <ItemTitle>{item.title}</ItemTitle>
              <Correct correct={item.correct}>
                {item.correct ? "VRAI" : "FAUX"}
              </Correct>
              <RemoveIcon onClick={() => Remove(item.id)} />
            </ItemWrapper>
          ))}
          <Loading isLoading={false}>
            <Span />
          </Loading>
        </ListOfItems>
      </Body>
    </Container>
  );
};

export default ItemsForm;
