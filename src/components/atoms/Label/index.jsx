import React, { memo } from "react";
import { Label as La } from "./styles";

function Label({ children }) {
  return <La>{children}</La>;
}

export default memo(Label);
