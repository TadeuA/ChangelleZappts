import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/themes/default";
import { ToastProvider, useToast } from "./toast";
import GlobalStyles from "../styles/global";

export function AppProvider({ children }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </>
  );
}

export { useToast };
