import { Fragment, useEffect } from "react";
import {
  DataHeader,
  DataItemInfo,
  DataItemTitle,
  DataItemWrapper,
  DataWrapper,
  EmptyTitle,
  EmptyWrapper,
  ExamIcon,
  LinkIcon,
  OpenIcon,
  RecentExamsTitleWrapper,
  Title,
} from "./RecentExams.elements";
import { useDispatch, useSelector } from "react-redux";
import { ClearDataE, GetLatestExam } from "../../../store/actions/exams";

import { useNavigate } from "react-router-dom";
import { ClearDataQ } from "../../../store/actions/questionACM";

import Loading from "../../ui/Loading/index";

const RecentExams = () => {
  const Exam = useSelector((state) => state.exam.last);
  const isLoading = useSelector(state => state.loading.isLoading)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Exam === "empty") {
      dispatch(GetLatestExam());
    }else{
      console.log(Exam);
    }
    
  }, [Exam, dispatch]);

  const OpenExamHandler = () => {
    dispatch(ClearDataQ());
    dispatch(ClearDataE());
    navigate("/accueil/exams/" + Exam._id);
  };

  const OpenExamTable = () => {
    navigate("/accueil/exams");
  };

  return (
    <Fragment>
      <RecentExamsTitleWrapper>
        <ExamIcon />
        <Title>Exam ajouté récemment</Title>
      </RecentExamsTitleWrapper>
      <DataWrapper>
        <DataHeader line={true}>
          <DataItemWrapper>
            <DataItemTitle>Titre</DataItemTitle>
          </DataItemWrapper>
          <DataItemWrapper>
            <DataItemTitle>Matriere</DataItemTitle>
          </DataItemWrapper>
          <DataItemWrapper>
            <DataItemTitle>Date d'ajout</DataItemTitle>
          </DataItemWrapper>
          <DataItemWrapper>
            <DataItemTitle>Ouvrir</DataItemTitle>
          </DataItemWrapper>
        </DataHeader>
        {isLoading  || Exam === "empty"?  (
          <Loading  small={true}/>
        ) : !Exam.titre ? (
          <EmptyWrapper>
            <EmptyTitle>
              Rien a afficher , cliquer ici pour ajouter un exam{" "}
            </EmptyTitle>
            <LinkIcon onClick={OpenExamTable} />
          </EmptyWrapper>
        ) : (
          <DataHeader line={false}>
            <DataItemWrapper>
              <DataItemInfo>{Exam.titre}</DataItemInfo>
            </DataItemWrapper>
            <DataItemWrapper>
              <DataItemInfo>{Exam.matiere}</DataItemInfo>
            </DataItemWrapper>
            <DataItemWrapper>
              <DataItemInfo>{Exam.date}</DataItemInfo>
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

export default RecentExams;
