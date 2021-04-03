import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #181818;
    color: #fdfbfa;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
  }

  ul, li {
    display: block;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  /* #080012 - #fc5f92 - #fdfbfa */
`;

export const WrapperSections = styled.section`
  width: calc(100% - 300px);
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  top: 50px;

  @media (max-width: 1090px) {
    width: calc(100%);
    top: 100px;
  }
`;

export const ContentSections = styled.main`
  width: 100%;
  padding: 40px;
  position: relative;
  left: 300px;

  @media (max-width: 1090px) {
    left: 0;
    padding: 20px 10px 10px 10px;
  }

  @media (max-width: 620px) {
    text-align: center;
  }
`;

export const TitleSections = styled.h1`
  display: inline-block;
  color: #fdfbfa;
  font-size: 2em;
  &:after {
    content: "";
    display: block;
    width: 50%;
    height: 3px;
    background: #fc5f92;
  }

  @media (max-width: 620px) {
    font-size: 1.3em;
    &:after {
      width: 100%;
    }
  }
`;
