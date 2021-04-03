import React from "react";
import * as Styles from "./styles";

const Page404 = () => {
  return (
    <Styles.WrapperPage404>
      <Styles.ContentWrapperPage>
        <Styles.Title404Page>404</Styles.Title404Page>
        <Styles.Subtitle404Page>page not found</Styles.Subtitle404Page>
        <Styles.BackToHome to="/">Back to Home</Styles.BackToHome>
      </Styles.ContentWrapperPage>
    </Styles.WrapperPage404>
  );
};

export default Page404;
