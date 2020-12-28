import React from "react";
import { Form as Fo } from "./styles";

export default function Form({ children, onSubmit }) {
  return <Fo onSubmit={onSubmit}>{children}</Fo>;
}
