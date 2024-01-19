import { useSelector } from "react-redux";
import SideBarContainer from "./animated/SideBarContainer";
import {
  ClassIcon,
  DashIcon,
  DashLink,
  ExamsIcon,
  LinkContanier,
  LinkGroup,
  SideBarWrapper,
  Title,
  TitleContainer,
} from "./SideBarLaptop.elements";

import { useLocation } from "react-router-dom";
import QstIcon from "../../../images/Logos/QstIcon";


const SideBarLaptop = () => {
  const LaptopSideBarMenu = useSelector((state) => state.UI.LaptopSideBarMenu);
  const location = useLocation();
  let path = "";

  if (location.pathname.includes("/accueil/questionnaire")) {
    path = "Q";
  } else if (location.pathname.includes("/accueil/exams")) {
    path = "E";
  } else if (location.pathname.includes("/accueil/classes")) {
    path = "C";
  } else if (location.pathname.includes("/accueil/")) {
    path = "A";
  }

  return (
    <SideBarContainer>
      
      <SideBarWrapper>
        <LinkGroup $opened={LaptopSideBarMenu}>
          <TitleContainer $opened={LaptopSideBarMenu}>
            <Title>Principale</Title>
          </TitleContainer>
          <LinkContanier to="/accueil/" $opened={LaptopSideBarMenu}>
            <DashIcon $actived={path === "A"} />
            <DashLink actived={path === "A"} $opened={LaptopSideBarMenu}>
              Accueil
            </DashLink>
          </LinkContanier>
        </LinkGroup>
        <LinkGroup $opened={LaptopSideBarMenu}>
          <TitleContainer $opened={LaptopSideBarMenu}>
            <Title>Gestion</Title>
          </TitleContainer>
          <LinkContanier to="/accueil/exams" $opened={LaptopSideBarMenu}>
            <ExamsIcon $actived={path === "E"} />
            <DashLink actived={path === "E"} $opened={LaptopSideBarMenu}>
              {" "}
              Exams
            </DashLink>
          </LinkContanier>
        </LinkGroup>
        <LinkGroup $opened={LaptopSideBarMenu}>
          <LinkContanier to="/accueil/classes" $opened={LaptopSideBarMenu}>
            <ClassIcon $actived={path === "C"} />
            <DashLink actived={path === "C"} $opened={LaptopSideBarMenu}>
              Classes
            </DashLink>
          </LinkContanier>
        </LinkGroup>
        <LinkGroup $opened={LaptopSideBarMenu}>
          <LinkContanier
            to="/accueil/questionnaire"
            $opened={LaptopSideBarMenu}
          >
            <QstIcon actived={path === "Q"} />
            <DashLink actived={path === "Q"} $opened={LaptopSideBarMenu}>
              Questionnaire
            </DashLink>
          </LinkContanier>
        </LinkGroup>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBarLaptop;
