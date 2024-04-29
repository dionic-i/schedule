import { FC, ReactNode } from 'react';
import { HeaderRoot } from './Header.styles';

export interface IHeaderProps {
  title: ReactNode;
}

const Header: FC<IHeaderProps> = ({ title }) => <HeaderRoot>{title}</HeaderRoot>;

export default Header;
