import styled from 'styled-components';

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Header = styled.div`
  width: 100%;
  padding: 16px;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  padding: 16px;
`;
