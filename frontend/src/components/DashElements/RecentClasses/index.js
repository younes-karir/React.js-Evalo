import { Fragment, useEffect } from "react";
import {
  ClassIcon,
  DataHeader,
  DataItemInfo,
  DataItemTitle,
  DataItemWrapper,
  DataWrapper,
  EmptyTitle,
  EmptyWrapper,
  LinkIcon,
  OpenIcon,
  RecentExamsTitleWrapper,
  Title,
} from "./RecentExams.elements";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { ClearDataC, GetLatestClass } from "../../../store/actions/classes";
import { ClearDataE } from "../../../store/actions/eleves";
import Loading from "../../ui/Loading";

const RecentClasses = () => {
  const Class = useSelector((state) => state.class.last);
  const isLoading = useSelector(state => state.loading.isLoading)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Class === "empty") {
      dispatch(GetLatestClass());
    }
  }, [Class, dispatch]);

  const OpenExamHandler = () => {
    dispatch(ClearDataC());
    dispatch(ClearDataE());
    navigate("/accueil/classes/" + Class._id);
  };

  const OpenClassTable = () => {
    navigate("/accueil/classes");
  };

  return (
    <Fragment>
      <RecentExamsTitleWrapper>
        <ClassIcon />
        <Title>Classe ajouté récemment</Title>
      </RecentExamsTitleWrapper>
      <DataWrapper>
        <DataHeader line={true}>
          <DataItemWrapper>
            <DataItemTitle>Nom</DataItemTitle>
          </DataItemWrapper>
          <DataItemWrapper>
            <DataItemTitle>Niveau</DataItemTitle>
          </DataItemWrapper>
          <DataItemWrapper>
            <DataItemTitle>Année Scolaire</DataItemTitle>
          </DataItemWrapper>
          <DataItemWrapper>
            <DataItemTitle>Ouvrir</DataItemTitle>
          </DataItemWrapper>
        </DataHeader>
        {isLoading || Class === "empty" ? (
          <Loading small={true} />
        ) : !Class.nom ? (
          <EmptyWrapper>
            <EmptyTitle>
              Rien a afficher , cliquer ici pour ajouter une classe{" "}
            </EmptyTitle>
            <LinkIcon onClick={OpenClassTable} />
          </EmptyWrapper>
        ) : (
          <DataHeader line={false}>
            <DataItemWrapper>
              <DataItemInfo>{Class.nom}</DataItemInfo>
            </DataItemWrapper>
            <DataItemWrapper>
              <DataItemInfo>{Class.niveau}</DataItemInfo>
            </DataItemWrapper>
            <DataItemWrapper>
              <DataItemInfo>{Class.anneescolaire}</DataItemInfo>
            </DataItemWrapper> 
            <DataItemWrapper>
              <OpenIcon onClick={OpenExamHandler} />
            </DataItemWrapper>
          </DataHeader>
        )}
      </DataWrapper>
    </Fragment>
  );
};

export default RecentClasses;
