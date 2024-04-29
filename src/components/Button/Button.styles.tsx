import styled from 'styled-components';

export const StyledButton = styled.button<{ $width?: number; $height?: number }>`
  border-radius: 8px;
  background-color: var(--button-bg-accept-color);
  color: var(--text-color);
  cursor: pointer;
  ${({ $width = 120 }) => `width:${$width}px;`}
  ${({ $height = 40 }) => `height:${$height}px;`}
`;
