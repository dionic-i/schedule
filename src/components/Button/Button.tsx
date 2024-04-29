import { FC, ReactNode } from 'react';
import { StyledButton } from './Button.styles';

export interface IButtonProps {
  width?: number;
  height?: number;
  type?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ children, width, height, type, onClick }) => (
  <StyledButton type={type} $width={width} $height={height} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
