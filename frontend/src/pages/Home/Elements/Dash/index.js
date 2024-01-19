import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RecentClasses from "../../../../components/DashElements/RecentClasses";
import RecentExams from "../../../../components/DashElements/RecentExams";
import RecentQst from "../../../../components/DashElements/RecentQst";
import Position from "../../../../components/Position";
import Profile from "../../../../components/Profile";
import { ClearDataE } from "../../../../store/actions/exams";
import { ClearDataQ } from "../../../../store/actions/questionACM";
import {
  ContentWrapper,
  DashContainer,
  DashItemsWrapper,
  PositionWarpper,
  ProfileWrapper,
  RecentExamsContainer,
  RecentStudentsContainer,
  StatContanier,
} from "./Dash.elements";

const Dash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(ClearDataQ());
      dispatch(ClearDataE());
    };
  }, [dispatch]);

  return (
    <DashContainer>
      <PositionWarpper>
        <Position />
      </PositionWarpper>
      <ContentWrapper>
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
        <DashItemsWrapper>
          <RecentExamsContainer>
            <RecentExams />
          </RecentExamsContainer>
          <RecentStudentsContainer>
            <RecentClasses />
          </RecentStudentsContainer>
          <StatContanier>
            <RecentQst />
          </StatContanier>
        </DashItemsWrapper>
      </ContentWrapper>
    </DashContainer>
  );
};

export default Dash;
