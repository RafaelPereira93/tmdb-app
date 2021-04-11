import React from "react";
import * as Styles from "./styles";

const allRoutes = ["/", "/trending", "/movie", "/by-gender", "/search"];

const Aside = () => {
  const pathName = window.location.pathname;

  return allRoutes.includes(pathName) ? (
    <Styles.AsideWrapper>
      <Styles.ListItems>
        <li>
          <Styles.ListLink to="/" end activeStyle={Styles.activeStyle}>
            New Releases
          </Styles.ListLink>
        </li>
        <li>
          <Styles.ListLink to="/trending" end activeStyle={Styles.activeStyle}>
            Trending
          </Styles.ListLink>
        </li>
        <li>
          <Styles.ListLink to="/by-genre" end activeStyle={Styles.activeStyle}>
            Genre
          </Styles.ListLink>
        </li>
        <li>
          <Styles.ListLink to="/search" end activeStyle={Styles.activeStyle}>
            Search
          </Styles.ListLink>
        </li>
      </Styles.ListItems>
    </Styles.AsideWrapper>
  ) : (
    <Styles.AsideWrapper>
      <Styles.ListItems>
        <li>
          {pathName.includes("search") ? (
            <Styles.ListLink to="/search" end>
              <Styles.BackToHome size="30"></Styles.BackToHome>
              <p>Back to search</p>
            </Styles.ListLink>
          ) : (
            <Styles.ListLink to="/" end>
              <Styles.BackToHome size="30"></Styles.BackToHome>
              <p>Back to home</p>
            </Styles.ListLink>
          )}
        </li>
      </Styles.ListItems>
    </Styles.AsideWrapper>
  );
};

export default Aside;
