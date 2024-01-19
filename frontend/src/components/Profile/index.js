import {
  EditPic,
  EmailIcon,
  Image,
  ImageWrapper,
  InfoItemContainer,
  InfoText,
  LabelText,
  ProfileBody,
  ProfileDetailsContainer,
  ProfileHeader,
  ProfilePicContainer,
  ProfileWarpper,
  Title,
} from "./Profile.elements";

import userProfile from "../../images/Profiles/boy-1.png";
import { useSelector } from "react-redux";
import Admin from "../../images/Profiles/Admin";

const Profile = () => {
  const userDetails = useSelector((state) => state.auth.user);

  return (
    <ProfileWarpper>
      <ProfileHeader>
        <Title>Détails</Title>
      </ProfileHeader>
      <ProfileBody>
        <ProfilePicContainer>
          <ImageWrapper>
            {/* <Image src={userProfile} /> */}
            <Admin />
            {/* <EditPic /> */}
          </ImageWrapper>
        </ProfilePicContainer>
        <ProfileDetailsContainer>
          <InfoItemContainer>
            <LabelText>Nom</LabelText>
            <InfoText>{userDetails.lname}</InfoText>
          </InfoItemContainer>
          <InfoItemContainer>
            <LabelText>Prenom</LabelText>
            <InfoText>{userDetails.fname}</InfoText>
          </InfoItemContainer>
          <InfoItemContainer>
            <EmailIcon />
            <InfoText>{userDetails.email}</InfoText>
          </InfoItemContainer>
        </ProfileDetailsContainer>
      </ProfileBody>
    </ProfileWarpper>
  );
};

export default Profile;
