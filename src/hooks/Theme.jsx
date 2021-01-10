import React from "react";
import { ThemeProvider as Provider } from "styled-components";
import { Theme } from "../styles/themes/default";

import GlobalStyles from "../styles/global";

export default function ThemeProvider({ children }) {
  return (
    <Provider theme={Theme}>
      <GlobalStyles />
      {children}
    </Provider>
  );
}
