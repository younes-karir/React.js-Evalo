import Header from "../Header";
import SideBar from "../SideBar";
import UIHelper from "./animated/UIHelper";
import { BodyContainer, BodyWrapper, ContentWrapper} from "./Layout.elements";

const Layout = ({children}) => {


  return (
    <BodyWrapper>
      <Header />
      <BodyContainer>
        <UIHelper />
        <SideBar />
        <ContentWrapper>
          {children} 
        </ContentWrapper>
      </BodyContainer>
    </BodyWrapper>
  );
};

export default Layout;
