import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export const Field = styled.input<{ $error?: boolean }>`
  width: 120px;
  height: 40px;
  text-align: right;
  border-radius: 8px;
  padding: 0 4px;
  ${({ $error = false }) => `${$error ? 'border-color: var(--error-color);' : null}`}
`;

export const Label = styled.label`
  color: var(--text-color);
`;

export const Message = styled.p`
  width: 200px;
  color: var(--error-color);
  font-size: 12px;
  margin: 8px 0;
  text-align: right;
`;
