import {
  Base,
  HeaderContainer,
  HeaderWrapper,
  Item,
  ItemN,
  LaptopMenu,
  LaptopMenuClose,
  LinkContainer,
  ListIcon,
  ListIconClose,
  ListIconConatiner,
  LogoWrapper,
  MenuIconWrapper,
  MobileMenu,
  MobileMenuClose,
  Name,
  ProfileImg,
  ProfileImgContainer,
  ProfileNameContainer,
  ProfileWrapper,
  SettingElemets,
  SettingIcon,
  SettingWrapper,
  Span,
} from "./Header.elements";
import SettingsBox from "./animated/SettingsBox";

import { useDispatch, useSelector } from "react-redux";

import userProfile from "../../images/Profiles/boy-1.png";
import { Fragment } from "react";
import { LaptopSideBarMenuToggle, SettingsToggle, SettingsToggleShow } from "../../store/actions/UI-Actions";
import { logoutUser } from "../../store/actions/authentication";
import Admin from "../../images/Profiles/Admin";
import Settings from "../ui/Settings";

const Header = () => {
  const LaptopSideBarMenu = useSelector((state) => state.UI.LaptopSideBarMenu);
  const userDetails = useSelector((state) => state.auth.user);
  const MobileSideBarMenu = useSelector((state) => state.UI.MobileSideBarContainer);
  const showSettings= useSelector((state) => state.UI.showSettings);

  const Dispatch = useDispatch();

  const LaptopMenuHandler = () => {
    Dispatch(LaptopSideBarMenuToggle ());
  };

  const SettingsHandler = () => {
    Dispatch(SettingsToggle());
  };

  const LogoutHandler = () =>{
    Dispatch(logoutUser())
  }

  const SettingsHandling = () =>{
    Dispatch(SettingsToggleShow())
  }

  return (
    <Fragment>
      <HeaderWrapper>
        <HeaderContainer>
          <MenuIconWrapper>
            { !MobileSideBarMenu ? <MobileMenu onClick={null} /> : <MobileMenuClose onClick={null}/>}
            { !LaptopSideBarMenu ? <LaptopMenu onClick={LaptopMenuHandler} /> : <LaptopMenuClose onClick={LaptopMenuHandler}/>}
          </MenuIconWrapper>
          <LogoWrapper>
            <Base>
              EVAL<Span>O</Span>
            </Base>
          </LogoWrapper>
          <SettingWrapper>
            <SettingIcon onClick={SettingsHandler} />
          </SettingWrapper>
          <ProfileWrapper>
            <ProfileImgContainer>
              {/* <ProfileImg src={userProfile} /> */}
              <Admin />
            </ProfileImgContainer>
            <ProfileNameContainer>
              <Name>{userDetails.fname+' '+userDetails.lname}</Name>
            </ProfileNameContainer>
            <ListIconConatiner>
              {!showSettings ? <ListIcon onClick={SettingsHandler} /> : <ListIconClose onClick={SettingsHandler} />}
            </ListIconConatiner>
          </ProfileWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      <SettingsBox>
        <SettingElemets>
          <Item to="/home/profile"><LinkContainer>Profile</LinkContainer></Item>
          <ItemN onClick={SettingsHandling}><LinkContainer>Settings</LinkContainer></ItemN>
          <Item to="/login" onClick={LogoutHandler}><LinkContainer>Logout</LinkContainer></Item>
        </SettingElemets>
      </SettingsBox>
      <Settings />
    </Fragment>
  );
};
export default Header;
