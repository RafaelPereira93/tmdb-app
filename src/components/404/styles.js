import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperPage404 = styled.section`
  width: 100vw;
  height: 100vh;
  background: #121212;
  padding-top: 50px;
`;

export const ContentWrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  width: 100%;
  height: 100%;
  padding-top: 150px;
`;

export const Title404Page = styled.h1`
  width: 100%;
  font-size: max(2em, 5vw);
  color: #fc5f92;
  line-height: 1;
`;

export const Subtitle404Page = styled.h2`
  width: 100%;
  font-size: max(2em, 4vw);
  color: #fc5f92;
  line-height: 1;
  text-transform: uppercase;
`;

export const BackToHome = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fdfbfa;
  margin-top: 30px;
  transition: 0.3s;
  font-size: 1.5em;

  &:hover {
    color: #fc5f92;
  }
`;
