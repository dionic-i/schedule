import { FC, ReactNode } from 'react';
import { Content, Root, Header } from './Layout.styles';

export interface ILayoutProps {
  header: ReactNode;
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ header, children }) => {
  return (
    <Root>
      <Header>{header}</Header>
      <Content>{children}</Content>
    </Root>
  );
};

export default Layout;
