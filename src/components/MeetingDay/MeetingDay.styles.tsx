import styled from 'styled-components';

export const Content = styled.h3<{ $error?: boolean }>`
  ${({ $error = false }) => `color:var(${$error ? '--error-color' : '--success-color'});`}
`;
