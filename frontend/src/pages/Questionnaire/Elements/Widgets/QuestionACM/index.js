import { useEffect, useState } from "react";
import Loading from "../../../../../components/ui/Loading";
import {
  Body,
  Check,
  Container,
  Header,
  Item,
  ItemsWrapper,
  Label,
  Note,
  QuestionTitle,
} from "./QuestionACM.elements";

const QuestionACM = (props) => {
  let res = [];

  const setResponse = (id) => {
    res = res.concat(id);
  };

  const unSetResponse = (id) => {
    res = res.filter((ele) => ele !== id);
  };

  const checkHandler = (event, item) => {
    if (event.target.checked) setResponse(item._id);
    else unSetResponse(item._id);
    props.onAdd({
      question: props.data._id,
      reponse: res,
    });
  };


  return (
    <Container>
      <Header>
        <QuestionTitle>{props.data.title}</QuestionTitle>
        <Note>({props.data.note}pt)</Note>
      </Header>
      <Body>
        <ItemsWrapper>
          {props.Clear ? <Loading /> : props.data.items.map((item) => (
            <Item key={item._id}>
              <Check
                type="checkbox"
                onChange={(event) => checkHandler(event, item)}
                defaultValue={false}
              />
              <Label>{item.title}.</Label>
            </Item>
          ))}
        </ItemsWrapper>
      </Body>
    </Container>
  );
};

export default QuestionACM;
