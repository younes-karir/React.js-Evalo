import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 6px;
  border-left: 4px solid ${(props) => props.theme.colors.primary};
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  padding: 1rem 0.5rem 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const QstIcon = styled.span``;

export const Title = styled.h4`
  font-family: system-ui;
  font-size: 1.1rem;
`;

export const BodyWrapper = styled.div``;
