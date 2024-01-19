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

import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {CloseAddClass } from "../../../store/actions/UI-Actions";
import { useState } from "react";
import SelectList from "./SelectList/index";
import { Add } from "../../../store/actions/classes";

function getAnneeScolaire() {
  const t = new Date();
  const year = t.getFullYear();
  return `${year} / ${year+1}`;
}


const Container = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);

  const [Nom, setNom] = useState("");
  const [Niveau, setNiveau] = useState({ label: "1 ère collège", value: 1 })
  const [AnneeScolaire, setAnneeScolaire] = useState(getAnneeScolaire());

  const NomHandler = (event) => {
    setNom(event.target.value);
  };

  const AnneeScolaireHandler = (event) => {
    setAnneeScolaire(event.target.value);
  };
  const EditHeaderHandler = () => {
    dispatch(CloseAddClass());
  };

  const AddClassHandler = (event) => {
    event.preventDefault();
    const Class = {
      nom:Nom,
      niveau:Niveau.label,
      anneescolaire :AnneeScolaire
    };
    dispatch(Add(Class));
  };

  return (
    <Modal>
      <Wrapper>
        <Header>
          <TitleContainer>
            <Title>Ajouter une classe</Title>
          </TitleContainer>
          <CloseIconContainer>
            <CloseIcon onClick={EditHeaderHandler} />
          </CloseIconContainer>
        </Header>
        <Body>
          <AddFrom onSubmit={AddClassHandler}>
            <Group row="true" space={true}>
              <SubGroup width="50%">
                <Label>Nom</Label>
                <Input
                  type="text"
                  name="Nom"
                  value={Nom}
                  onChange={NomHandler}
                />
              </SubGroup>
              <SubGroup width="50%" space={true}>
                <Label>Niveau</Label>
                <SelectList Selected={Niveau} setSelected={setNiveau}/>
              </SubGroup>
            </Group>
            <Group row="true" space={true}>
              <SubGroup width="50%">
                <Label>année scolaire</Label>
                <Input
                  type="text"
                  name="date"
                  disabled
                  value={AnneeScolaire}
                  onChange={AnneeScolaireHandler}
                />
              </SubGroup>
              <SubGroup width="50%" space={true}></SubGroup>
            </Group>
            <Group row="true">
              <SubmitContainer>
                <Submit >{isLoading ? 'en cours...' : 'Ajouter'}</Submit>
              </SubmitContainer>
            </Group>
          </AddFrom>
        </Body>
      </Wrapper>
    </Modal>
  );
};

const AddClass = () => {
  return ReactDOM.createPortal(
    <Container />,
    document.getElementById("portal-root")
  );
};

export default AddClass;
