import { useDispatch } from "react-redux";
import ListContainer from "./animated/ListContainer";
import {
  Body,
  EditContainer,
  EditIcon,
  Group,
  Header,
  Input,
  Label,
  QstWrapper,
  ResponseContainer,
  Submit,
  Text,
  TextContainer,
} from "./SecondType.elements";


const SecondType = (props) => {
  const Dispatch = useDispatch ();

  const ListEditHandler = () =>{
    console.log('clicked')
  }

  return (
    <QstWrapper>
      <Header>
        <TextContainer>
          <Text>{props.item.text}</Text>
        </TextContainer>
        <EditContainer>
          <EditIcon onClick={ListEditHandler}/>
          <ListContainer>
            {/* option : supprimer modifier ..... */}
          </ListContainer>
        </EditContainer>
      </Header>
      <Body>
        <ResponseContainer>
          <Group  widthg="80%" endline={false} displayb={true}>
            <Label>Reponse :</Label>
            <Input />
          </Group>
          <Group  widthg="20%" endline={true}>
              <Submit disabled>Valider</Submit>
          </Group>
        </ResponseContainer>
      </Body>
    </QstWrapper>
  );
};

export default SecondType;
