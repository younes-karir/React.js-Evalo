import MaterialTable from "@material-table/core";
import tableIcons from "./Icons";
import { useTheme } from "styled-components";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { RiFileTextLine } from "react-icons/ri";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  ClearDataE,
  getAll,
  Remove,
  select,
} from "../../../store/actions/exams";
import { AddExamOpen, OpenConfirm } from "../../../store/actions/UI-Actions";
import AddExam from "../../AddForms/AddExam";
import { useRef } from "react";
import { ClearDataQ } from "../../../store/actions/questionACM";
import { useEffect } from "react";

const TableListExams = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const tableRef = useRef();

  useEffect(() => {
    return () => {
      dispatch(ClearDataQ());
      dispatch(ClearDataE());
    };
  }, [dispatch]);

  const columns = [
    {
      title: "",
      field: "",
      render: (item) => <ExamIcon />,
      width: "fit-content",
    },
    { title: "Titre", field: "titre" },
    { title: "Matière", field: "matiere" },
    { title: "Date de creation", field: "date" },
    { title: "Nombre des questions", field: "qstnumber", width: "22%" },
  ];

  const localizationObj = {
    body: {
      emptyDataSourceMessage: "Aucun enregistrement à afficher",
    },
    pagination: {
      firstTooltip: "Première page",
      previousTooltip: "Page précédente",
      nextTooltip: "suivante",
      lastTooltip: "Dernière page",
      labelRowsSelect: "lignes",
    },
    toolbar: {
      searchTooltip: "Recherche",
      searchPlaceholder: "Rechercher",
    },
  };

  const handleDelete = (event, rowData) => {
    dispatch(
      OpenConfirm({
        title: "Confirmation",
        text: "vous etes sure de supprimer cet exam?",
        logic: () => {
          dispatch(Remove(rowData._id));
        },
      })
    );
  };

  const HandeleOpen = (event, rowData) => {
    dispatch(select(rowData._id));
    navigate("/accueil/exams/" + rowData._id);
  };

  const HandleAdd = () => {
    dispatch(AddExamOpen());
  };

  const ActionLst = [
    {
      icon: tableIcons.Add,
      tooltip: "Ajouter",
      isFreeAction: true,
      onClick: HandleAdd,
    },
    {
      icon: tableIcons.Open,
      tooltip: "Voir",
      isFreeAction: false,
      onClick: HandeleOpen,
    },
    {
      icon: tableIcons.Delete,
      tooltip: "Supprimer",
      onClick: handleDelete,
    },
    {
      icon: tableIcons.Refresh,
      tooltip: "",
      isFreeAction: true,
      onClick: () => dispatch(getAll(true)),
    },
  ];

  const TableStyle = {
    padding: ".2rem .5rem 0rem .5rem",
    borderRadius: "6px",
    borderTop: `solid 4px ${theme.colors.primary}`,
    height: "100%",
  };

  return (
    <Container>
      <AddExam />
      <MuiThemeProvider
        theme={createTheme({
          palette: { primary: { main: theme.colors.primary } },
        })}
      >
        <MaterialTable
          tableRef={tableRef}
          style={TableStyle}
          localization={localizationObj}
          actions={ActionLst}
          icons={tableIcons}
          title="List des exams"
          data={props.examslist}
          isLoading={props.isloading}
          columns={columns}
          options={{
            rowStyle: {
              color: theme.colors.text,
              fontSize: 17,
              fontFamily: "system-ui",
            },
            headerStyle: {
              backgroundColor: theme.colors.background2,
              color: theme.colors.text,
              fontSize: 17,
            },
            actionsCellStyle: {
              color: theme.colors.text,
            },
            filterCellStyle: {
              color: theme.colors.text,
            },
            actionsColumnIndex: 5,

            loadingType: "overlay",
          }}
        />
      </MuiThemeProvider>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;

  & > div {
    transition: background-color 600ms linear !important;
    background-color: ${(props) => props.theme.colors.background2};
    color: ${(props) => props.theme.colors.text} !important ;
  }


  & > h6, tr , td , th , span , button ,ul , svg {
    color: ${(props) => props.theme.colors.text} !important ;
  }
  
`;

const ExamIcon = styled(RiFileTextLine)`
  font-size: 1.88rem;
  vertical-align: middle;
  /* color: ${(props) => props.theme.colors.text2}; */
`;

export default TableListExams;
