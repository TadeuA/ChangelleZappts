import React, { memo } from "react";
import { Button as Bu } from "./styles";

function Button({
  onClick = () => {},
  type = "button",
  className = "",
  children,
}) {
  return (
    <Bu onClick={onClick} type={type} className={className}>
      {children}
    </Bu>
  );
}

export default memo(Button);
