import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReturnUpBack as ArrowBack } from "@styled-icons/ionicons-solid/ReturnUpBack";

export const AsideWrapper = styled.aside`
  width: 100%;
  max-width: 300px;
  height: 100vh;
  background: #121212;
  box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.6);
  padding-top: 40px;
  position: fixed;
  top: 40px;
  left: 0;

  @media (max-width: 1090px) {
    width: 100%;
    top: 48px;
    max-width: 100%;
    height: 50px;
    background: #121212;
    padding-top: 0;
    z-index: 20000;
  }
`;

export const ListItems = styled.ul`
  display: flex;
  flex-direction: column;

  @media (max-width: 1090px) {
    height: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
  }

  @media (max-width: 620px) {
    gap: 10px;
  }
`;

export const ListLink = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  color: #fdfbfa;

  @media (max-width: 1090px) {
    font-size: 1em;
    justify-content: center;
    padding: 0;
  }

  @media (max-width: 620px) {
    font-size: 0.7em;
  }
`;

export const BackToHome = styled(ArrowBack)`
  color: #fc5f92;
  margin-right: 10px;
`;

export const activeStyle = {
  color: "#fc5f92",
};
