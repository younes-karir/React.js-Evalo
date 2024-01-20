import {
  BodyWrapper,
  Data,
  ElementWrapper,
  EleveConatnier,
  EmailIcon,
  HeaderWrapper,
  InfoElement,
  InfoWrapper,
  PersonalInfoWrapper,
  PhoneIcon,
  ProfileIcon,
  ProfileWrapper,
  RemoveIcon,
  Title,
} from "./Eleve.elements";

import TopIcon from "../../images/Logos/TopIcon";
import BottomIcon from "../../images/Logos/BottomIcon";
import F from "../../images/User/F.svg";
import H from "../../images/User/H.svg";

import { useDispatch } from "react-redux";
import { OpenConfirm } from "../../store/actions/UI-Actions";
import {Remove} from "../../store/actions/eleves"



const Eleve = (props) => {
  
  const dispatch = useDispatch();
  const RemoveHandler = () => {
    dispatch(
      OpenConfirm({
        title: "Confirmation",
        text: "vous etes sure de supprimer cet eleve ?",
        logic: () => {
          dispatch(Remove(props.eleve._id,props.class));
        },
      })
    );
  };

  return (
    <EleveConatnier>
      <TopIcon />
      <BottomIcon />
      <HeaderWrapper>
        <ProfileWrapper>
          <ProfileIcon src={props.eleve.genre === "F" ? F : H} />
        </ProfileWrapper>
        <PersonalInfoWrapper>
          <ElementWrapper>
            <Title>C.N.E :</Title>
            <Data>{props.eleve.cne}</Data>
          </ElementWrapper>
          <ElementWrapper>
            <Title>Nom :</Title>
            <Data>{props.eleve.nom}</Data>
          </ElementWrapper>
          <ElementWrapper>
            <Title>Prenom :</Title>
            <Data>{props.eleve.prenom}</Data>
          </ElementWrapper>
        </PersonalInfoWrapper>
        <RemoveIcon  onClick={RemoveHandler}/>
      </HeaderWrapper>
      <BodyWrapper>
        <InfoWrapper>
          <InfoElement>
            <EmailIcon />
            <Data>{props.eleve.email}</Data>
          </InfoElement>
          <InfoElement>
            <PhoneIcon />
            <Data>{props.eleve.phone}</Data>
          </InfoElement>
        </InfoWrapper>
      </BodyWrapper>
    </EleveConatnier>
  );
};



export default Eleve;
