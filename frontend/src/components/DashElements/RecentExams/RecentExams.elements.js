import styled from "styled-components";
import { MdOpenInNew } from "react-icons/md";
import { RiFileTextLine } from "react-icons/ri";
import { HiExternalLink } from "react-icons/hi";

export const RecentExamsTitleWrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  padding: 1rem 0.5rem 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
export const Title = styled.h4`
  font-family: system-ui;
  font-size: 1.1rem;
`;

export const DataWrapper = styled.div`
  height: calc(100% - 3rem);
  overflow: hidden;
  /* background-color: green; */
  /* overflow: auto;
   */
`;

export const DataHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  margin: 0rem 1rem;
  padding: 0.1rem 0rem;
  border-bottom: ${(props) => (props.line ? "1.5px solid #80808078" : "none")};
`;

export const DataItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0rem 0.5rem;
  height: 100%;
  width: 8rem;
  max-width: 10rem;
  min-width: 3rem;
  text-overflow: ellipsis;
  &:last-of-type {
    width: 4rem;
    /* align-items :flex-end; */
  }
`;

export const DataItemTitle = styled.h5`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  opacity: 0.8;
  width: 100%;
  overflow: hidden;
`;

export const DataItemInfo = styled.p`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;

export const OpenIcon = styled(MdOpenInNew)`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:active {
    opacity: 0.8;
  }
`;

export const ExamIcon = styled(RiFileTextLine)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;
`;

export const EmptyWrapper = styled.div`
  width: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0rem;
  justify-content: center;
  gap: 0.5rem;
`;

export const EmptyTitle = styled.h4`
  font-size: 0.8rem;
  opacity: 0.4;
`;

export const LinkIcon = styled(HiExternalLink)`
  font-size: 1.3rem;
  opacity: 0.4;
  /* transition: all 0.3s linear; */

  &:hover {
    cursor: pointer;
    /* transform: translateX(5px); */
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;
