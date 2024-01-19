import {
  AddFrom,
  ChangeIcon,
  ChangeLabel,
  ChangeWrapper,
  CloseIcon,
  CloseIconContainer,
  ConatctWrapper,
  ContactInfoWrapper,
  DetailsWrapper,
  EmailIcon,
  Group,
  Header,
  Input,
  Label,
  PersoInfosWrapper,
  PhoneIcon,
  ProfileIcon,
  ProfileWrapper,
  Submit,
  SubmitContainer,
  Title,
  TitleContainer,
} from "./AddEleve.elements";
import Modal from "./animated/Modal";
import Wrapper from "./animated/Wrapper";

import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CloseAddEleve } from "../../../store/actions/UI-Actions";
import { useState } from "react";

import F from "../../../images/User/F.svg";
import H from "../../../images/User/H.svg";
import { Add } from "../../../store/actions/eleves";

const Container = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  const [CNE, setCNE] = useState("");
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Genre, setGenre] = useState(false);
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  const CNEHandler = (event) => {
    setCNE(event.target.value);
  };

  const NomHandler = (event) => {
    setNom(event.target.value);
  };

  const PrenomHandler = (event) => {
    setPrenom(event.target.value);
  };

  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const PhoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const GenreHandler = () => {
    setGenre(!Genre);
  };

  const EditHeaderHandler = () => {
    dispatch(CloseAddEleve());
  };

  const AddEleveHandler = (event) => {
    event.preventDefault();
    const Eleve = {
      cne:CNE,
      nom: Nom,
      prenom:Prenom,
      email:Email,
      phone:Phone,
      genre: Genre ? 'H':'F',
      class:props.id 

    };
    dispatch(Add(Eleve));
  };

  return (
    <Modal>
      <Wrapper>
        <Header>
          <TitleContainer>
            <Title>Ajouter un eleve</Title>
          </TitleContainer>
          <CloseIconContainer>
            <CloseIcon onClick={EditHeaderHandler} />
          </CloseIconContainer>
        </Header>
        <AddFrom onSubmit={AddEleveHandler}>
          <PersoInfosWrapper>
            <ProfileWrapper>
              <ProfileIcon src={Genre ? H : F} />
              <ChangeWrapper>
                <ChangeLabel>Genre</ChangeLabel>
                <ChangeIcon onClick={GenreHandler} />
              </ChangeWrapper>
            </ProfileWrapper>
            <DetailsWrapper>
              <Group>
                <Label>C.N.E</Label>
                <Input 
                       type={"text"}
                       name={"cne"}
                       value={CNE}
                       onChange={CNEHandler}
                />
              </Group>
              <Group>
                <Label>Nom</Label>
                <Input
                  type={"text"}
                  name={"nom"}
                  value={Nom}
                  onChange={NomHandler}
                />
              </Group>
              <Group>
                <Label>Prenom</Label>
                <Input
                type={"text"}
                name={"prenom"}
                value={Prenom}
                onChange={PrenomHandler}
                />
              </Group>
            </DetailsWrapper>
          </PersoInfosWrapper>
          <ConatctWrapper>
            <ContactInfoWrapper>
               <Group >
                <PhoneIcon/>
                <Input
                  info="true"
                  type={"tel"}
                  name={"phone"}
                  value={Phone}
                  onChange={PhoneHandler}
                />
              </Group>
              <Group >
                <EmailIcon/>
                <Input
                  
                  type={"text"}
                  name={"Email"}
                  value={Email}
                  onChange={EmailHandler}
                />
              </Group>
             
            </ContactInfoWrapper>
          </ConatctWrapper>
          <SubmitContainer>
            <Submit>{isLoading ? "en cours..." : "Ajouter"}</Submit>
          </SubmitContainer>
        </AddFrom>
      </Wrapper>
    </Modal>
  );
};

const AddEleve = (props) => {
  return ReactDOM.createPortal(
    <Container id={props.id} />,
    document.getElementById("portal-root")
  );
};

export default AddEleve;
