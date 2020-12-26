import React from "react";
import { AuthProvider, useAuth } from "./auth";
import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/themes/default";

import GlobalStyles from "../styles/global";

export function AppProvider({ children }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </>
  );
}

export { useAuth };
