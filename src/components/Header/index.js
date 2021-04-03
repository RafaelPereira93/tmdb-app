import React from "react";
import * as Styles from "./styled";
import { Themoviedatabase as LogoDatabase } from "@styled-icons/simple-icons/Themoviedatabase";

const Header = () => {
  return (
    <Styles.Header>
      <Styles.WrapperLogo>
        <Styles.LinkLogo to="/">
          <LogoDatabase size="28" />
          <p>Movie App</p>
        </Styles.LinkLogo>
      </Styles.WrapperLogo>
    </Styles.Header>
  );
};

export default Header;
