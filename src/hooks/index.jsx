import React from "react";
import { ToastProvider, useToast } from "./Toast";
import ThemeProvider from "./Theme";

export function AppProvider({ children }) {
  return (
    <>
      <ThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </>
  );
}

export { useToast };
