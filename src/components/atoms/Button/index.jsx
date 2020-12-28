import React, { memo } from "react";
import { Button as Bu } from "./styles";

function Button({
  onClick = () => {},
  type = "button",
  className = "",
  children,
  style = {},
}) {
  return (
    <Bu onClick={onClick} type={type} className={className} style={style}>
      {children}
    </Bu>
  );
}

export default memo(Button);
