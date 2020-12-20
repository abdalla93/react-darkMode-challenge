import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  .app {
  padding: 10%;
  max-width: 1000px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  box-sizing: content-box;

  &__dark-mode-btn {
    border: 0;
    background: transparent;
    font-size: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .buttons > .button {
    height: 45px;
    width: 140px;
  }
  .newTitle {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;
  }
}
  }
  `
