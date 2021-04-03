import styled from "styled-components";
import { Link } from "react-router-dom";
import { Search } from "@styled-icons/boxicons-regular/Search";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(200px, 300px);
  background: #fc5f92;
  padding: 10px 0;
  z-index: 10000;
`;

export const WrapperLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkLogo = styled(Link)`
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  text-decoration: none;
  gap: 15px;
  color: #fdfbfa;
  font-size: 0.9em;
  text-transform: uppercase;

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LogoInput = styled(Search)`
  color: #fdfbfa;
`;
