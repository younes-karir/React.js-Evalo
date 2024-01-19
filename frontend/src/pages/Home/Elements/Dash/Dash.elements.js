import styled from "styled-components";

export const DashContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;
export const PositionWarpper = styled.div`
  height: 2.5rem;
  width: 100%;
`;
export const ContentWrapper = styled.div`
  height: calc(100vh - 4rem - 60px);
  width: 100%;
  /* background-color: white; */
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const ProfileWrapper = styled.div`
  height: 100%;
  width: 25%;
  min-height: 20rem;
  min-width: 18rem;
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 6px;
  /* border: solid 2px gray; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DashItemsWrapper = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RecentExamsContainer = styled.div`
  width: 100%;
  height: calc(100% / 3);
  background-color: ${(props) => props.theme.colors.background2};
  border-radius:6px;
  border-left: 4px solid ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: .5rem; */
  /* align-items: center;
  justify-content: center; */
`;

export const RecentStudentsContainer = styled.div`
  width: 100%;
  height: calc(100% / 3);
  background-color: ${(props) => props.theme.colors.background2};
  border-radius:6px;
  border-left: 4px solid ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StatContanier = styled.div`
  width: 100%;
  height: calc(100% / 3);
  background-color: ${(props) => props.theme.colors.background2};
  border-radius:6px;
`;
