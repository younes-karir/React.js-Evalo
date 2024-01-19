import SideBarContainer from "./animated/SideBarContainer";
import SideBarModal from "./animated/SideBarModal";


import userProfile from "../../../images/Profiles/boy-1.png";
import {
  Name,
  ProfileContainer,
  ProfileImg,
  ProfileImgContainer,
  SideBarWrapper,
} from "./SideBar.mobile.elements";
import { Fragment } from "react";

const SideBarMobile = () => {
  return (
    <Fragment>
      <SideBarModal />
      <SideBarContainer>
        <SideBarWrapper>
          <ProfileContainer>
            <ProfileImgContainer>
            <ProfileImg src={userProfile} />
            </ProfileImgContainer>
            <Name>{'younes karir'}</Name>
          </ProfileContainer>
          {/* kml le lins o dkchi */}
        </SideBarWrapper>
      </SideBarContainer>
    </Fragment>
  );
};

export default SideBarMobile;
