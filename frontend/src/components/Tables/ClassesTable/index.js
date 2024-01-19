import MaterialTable from "@material-table/core";
import tableIcons from "./Icons";
import { useTheme } from "styled-components";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { MdOutlineGroups } from "react-icons/md";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { OpenAddClass, OpenConfirm } from "../../../store/actions/UI-Actions";

import { useRef } from "react";
import { useEffect } from "react";
import { ClearDataC, getAll, Remove, select } from "../../../store/actions/classes";
import { ClearDataE } from "../../../store/actions/eleves";
import AddClass from "../../AddForms/AddClass";

const TableListClasses = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const tableRef = useRef();

  useEffect(() => {
    return () => {
      dispatch(ClearDataC());
      dispatch(ClearDataE());
    };
  }, [dispatch]);

  const columns = [
    {
      title: "",
      field: "",
      render: (item) => <ClassIcon />,
      width: "fit-content",
    },
    { title: "Nom", field: "nom" },
    { title: "Niveau", field: "niveau" },
    { title: "Année Scolaire", field: "anneescolaire" },
    { title: "Nombre des élèves", field: "elevenumber" , width:'20%'},
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
        text: "vous etes sure de supprimer cette classe?",
        logic: () => {
          dispatch(Remove(rowData._id));
        },
      })
    );
  };

  const HandeleOpen = (event, rowData) => {
    dispatch(select(rowData._id));
    navigate("/accueil/classes/" + rowData._id);
  };

  const HandleAdd = () => {
    dispatch(OpenAddClass());
  };

  const ActionLst = [
    {
      icon: tableIcons.Delete,
      tooltip: "Supprimer",
      onClick: handleDelete,
    },
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
      icon: tableIcons.Refresh,
      tooltip: "",
      isFreeAction: true,
      onClick: () => dispatch(getAll()),
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
      <AddClass />
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
          title="List des classes"
          data={props.classeslist}
          isLoading={props.isloading}
          columns={columns}
          options={{
            rowStyle: {
              color: theme.colors.text,
              fontSize:17,
              fontFamily:'system-ui'
            },
            headerStyle: {
              backgroundColor: theme.colors.background2,
              color: theme.colors.text,
              fontSize:17
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

const ClassIcon = styled(MdOutlineGroups)`
  font-size: 1.88rem;
  vertical-align: middle;
`;

export default TableListClasses;
