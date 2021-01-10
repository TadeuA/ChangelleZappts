import React, { memo } from "react";
import { Label as La } from "./styles";

function Label({ children, reference }) {
  return <La htmlFor={reference}>{children}</La>;
}

export default memo(Label);
