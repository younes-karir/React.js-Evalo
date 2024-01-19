import { useParams } from "react-router-dom";
import Eleve from "../../../../components/Eleve";
import Position from "../../../../components/Position";
import Loading from "../../../../components/ui/Loading";

import { useDispatch, useSelector } from "react-redux";
import { getAll as getAllC, select } from "../../../../store/actions/classes";
import { getAll as getAllE } from "../../../../store/actions/eleves";

import {
  AddIcon,
  AddWarpper,
  AddWrapperIcon,
  CancelSearchIcon,
  ClassHeader,
  ClassHeaderContainer,
  ClassWrapper,
  Container,
  EditIcon,
  Element,
  ElementContainer,
  EmptyList,
  EmptyListContanier,
  HeaderActionContainer,
  HeaderInfoContainer,
  Label,
  ListContainer,
  SearchIcon,
  SearchInput,
  SearchInputWrapper,
  SearchWrapper,
  TextAdd,
  TextSearch,
} from "./Classes.Elements";
import { Fragment, useEffect, useState } from "react";
import { OpenAddEleve } from "../../../../store/actions/UI-Actions";
import AddEleve from "../../../../components/AddForms/AddEleve";


const Classe = (props) => {
  const [Recherche, setRecherche] = useState("");
  const dispatch = useDispatch();

  const RechercheHAndler = (event) => {
    setRecherche(event.target.value);
  };

  const ClearSearchHandler = () => {
    setRecherche("");
  };


  const AddEleveHnadler = () =>{
    dispatch(OpenAddEleve());
  }

  return (
    <Container>
      <Position />
      <ClassWrapper>
        <ClassHeaderContainer>
          <ClassHeader>
            <HeaderInfoContainer>
              <ElementContainer>
                <Label>Nom :</Label>
                <Element>{props.class.nom}</Element>
              </ElementContainer>
              <ElementContainer>
                <Label>Niveau :</Label>
                <Element>{props.class.niveau}</Element>
              </ElementContainer>
              <ElementContainer>
                <Label>Annee Scolaire :</Label>
                <Element>{props.class.anneescolaire}</Element>
              </ElementContainer>
              <ElementContainer>
                <Label>Nombre des eleves :</Label>
                <Element>{props.isLoading ? '...' : props.eleves.length}</Element>
              </ElementContainer>
            </HeaderInfoContainer>
            <HeaderActionContainer>
              <SearchWrapper>
                <TextSearch>Rechercher</TextSearch>
                <SearchInputWrapper>
                  <SearchIcon></SearchIcon>
                  <SearchInput value={Recherche} onChange={RechercheHAndler} />
                  <CancelSearchIcon onClick={ClearSearchHandler} />
                </SearchInputWrapper>
              </SearchWrapper>
              <AddWarpper>
                <AddWrapperIcon>
                  <TextAdd>Ajouter</TextAdd>
                  <AddIcon onClick={AddEleveHnadler} />
                  <AddEleve id={props.class._id}/>
                </AddWrapperIcon>
                <AddWrapperIcon>
                  <TextAdd>Modifier</TextAdd>
                  <EditIcon />
                </AddWrapperIcon>
              </AddWarpper>
            </HeaderActionContainer>
          </ClassHeader>
        </ClassHeaderContainer>
        <ListContainer test={props.eleves.length === 0 || props.isLoading}>
          {props.isLoading ? (
            <Loading />
          ) : props.eleves.length === 0 ? (
            <EmptyListContanier>
              <EmptyList>liste des eleves est vide!</EmptyList>
            </EmptyListContanier>
          ) : (
            props.eleves
              .filter(
                (item) =>
                  item.nom.includes(Recherche) ||
                  item.prenom.includes(Recherche) ||
                  item.cne.includes(Recherche) ||
                  item.email.includes(Recherche) ||
                  item.phone.includes(Recherche) ||
                  Recherche === ""
              )
              .map((item) => {
                return (
                  <Eleve key={item._id} class={props.class._id} eleve={item} />
                );
              })
          )}
        </ListContainer>
      </ClassWrapper>
    </Container>
  );
};

const Classes = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const classe = useSelector((state) => state.class.selected);
  const list = useSelector((state) => state.class.list);
  const ElevesList = useSelector((state) => state.eleve.list);
  const isLoading = useSelector(state => state.loading.isLoading);


  useEffect(() => {
    if (list.length === 0) {
      dispatch(getAllC());
    } else if (!classe.nom) {
      dispatch(select(id));
    } else if (ElevesList === "empty") {
      dispatch(getAllE(classe._id));
    } else {
      console.log("all good");
    }
  }, [list, dispatch, classe, id, ElevesList]);
  return (
    <Fragment>
      {classe.nom ? (
        <Classe
          class={classe}
          eleves={ElevesList}
          isLoading={ElevesList === "empty" || isLoading}
        />
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default Classes;
