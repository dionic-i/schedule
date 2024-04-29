import './default-schema.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    border-radius: 100px;
    background-color: var(--background-scroll);
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--background-scroll-hover);
  }

  ::-webkit-scrollbar-thumb:vertical {
    min-height: 32px;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    min-width: 32px;
  }
`;
