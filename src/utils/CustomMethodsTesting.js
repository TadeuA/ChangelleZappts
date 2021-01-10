import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "../hooks/Theme";

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRenderers = (component, options) =>
  render(component, { wrapper: Providers });

export * from "@testing-library/react";

export { customRenderers as render };
