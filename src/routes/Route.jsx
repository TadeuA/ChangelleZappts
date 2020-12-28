import React from "react";
import { Route as CustomRoute } from "react-router-dom";
import Carousel from "../components/molecules/Carousel";
import slides from "../utils/slides";
import { Div, Main } from "./styles";
const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  return (
    <CustomRoute
      {...rest}
      render={() => {
        return isPrivate ? (
          <>
            <Component />
          </>
        ) : (
          <Div>
            <Carousel slides={slides} />
            <Main>
              <Component />
            </Main>
          </Div>
        );
      }}
    />
  );
};

export default Route;
