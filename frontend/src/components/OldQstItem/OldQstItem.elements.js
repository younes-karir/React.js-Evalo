import styled from "styled-components";
import { AiOutlineFileSearch as old } from "react-icons/ai";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import RemoveRedEye from "@material-ui/icons/RemoveRedEyeOutlined";
import Search from "@material-ui/icons/Search";



export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const ActionsWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1rem;
  justify-content: center;
`;
export const BodyWrapper = styled.div`
  width: calc(90% - 4rem);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
    `;

export const ExamInfo = styled.div`
  height: 100%;
  width: calc(100% / 3);
  /* background-color: aquamarine; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0rem;
`;

export const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.h4`
  font-size: 0.9rem;
`;

export const Data = styled.p`
  font-size: 0.9rem;
  width: fit-content;
  color: ${props => props.theme.colors.text2};
`;

export const ClassInfo = styled.div`
  height: 100%;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0rem;
`;

export const QstDetails = styled.div`
  height: 100%;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0rem;
`;

export const IconWrapper = styled.div`
  width: 5.5rem;
  min-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OldIcon = styled(old)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.text2};
`;

// icons
export const RemoveIcon = styled(DeleteOutline)`
  height: 1.6rem !important;
  width: 1.6rem !important;
  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.8;
  }
`;
export const Open = styled(RemoveRedEye)`
  height: 1.6rem !important;
  width: 1.6rem !important;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: fit-content;
  height: fit-content;
  gap: 0.5rem;
`;
