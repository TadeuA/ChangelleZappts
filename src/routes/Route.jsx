import React from "react";
import { Route as CustomRoute } from "react-router-dom";
import Carousel from "../components/molecules/Carousel";
import slides from "../utils/slides";
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <Carousel slides={slides} />
            <Component />
          </div>
        );
      }}
    />
  );
};

export default Route;
