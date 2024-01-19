import styled from "styled-components";
import { FiEdit, FiXSquare } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai";
import {HiOutlineMinusSm} from 'react-icons/hi'

export const QstContainer = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 6px;
  padding: 0.5rem 0.3rem .5rem 0.3rem;
  /* border-right: 4px solid ${(props) => props.theme.colors.primary}; */
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  overflow: hidden;
`;


export const BottomLeftUI = styled.img`
  width: 2.5rem;
  position: absolute;
  bottom: 0px;
  left: 0px;
  opacity: 0.7;
`;


export const Header = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 2px ${(props) => props.theme.colors.background};
  padding: .5rem 0rem 1rem 0rem;
`;

export const EditIconContainer = styled.div`
  width: 2rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0.6rem;
  padding-left: ${props => props.addspace ? '1.6rem' : '0rem'};
`;

export const LabelText = styled.h4`
  font-size: inherit;
  color: #7b7b7b;
  text-transform:capitalize;
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const Flesh = styled(AiFillCaretRight)`
  font-size: 0.8rem;
  opacity:.6;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 0.5rem;
`;

export const FleshDown = styled(AiFillCaretRight)`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 0.5rem;
  transform: rotate(90deg);
`;

export const Point = styled(HiOutlineMinusSm)`

font-size: 1.2rem;
`

export const Text = styled.h4`
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Note = styled.h4`
  font-weight: nor;
  color: green;
  margin-left: 0.3rem;
`;

export const EditContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 0.5rem;
`;

export const EditIcon = styled(FiEdit)`
  font-size: 1.4rem;
  color: #7b7b7b;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const RemoveIcon = styled(FiXSquare)`
  font-size: 1.4rem;
  color: #7b7b7b;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.1rem 0.6rem 0.6rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;

export const ItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const QstConsigneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:.2rem;

`;

export const TitleContanier = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.h4`
  font-size: inherit;
  color: ${(props) => props.theme.colors.primary};
  /* color: green; */
  opacity: .9;
  font-weight: bold;
  margin-right: 0.5rem;
`;
export const ListContainer = styled.div`
  display: flex;
  width: 75%;
  min-width: 10rem;
  flex-direction: row;
  align-items: center;
  padding-left: .2rem;
`;
export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;
export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  /* margin-right: 1rem; */
  border-left: 8px solid gray;
  background-color: #c6c6c68f;
  border-radius: 6px;
  gap:.5rem;
  padding: .2rem .6rem;
  & > svg {
    color: black;
  }
`;
export const ItemTitle = styled.h4`
  width: 100%;
  font-weight: normal;
  min-width: 15rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
export const Correct = styled.h4`
  /* color: ${(props) => (props.correct ? "green" : "red")}; */
  color: gray;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 3rem;
`;
