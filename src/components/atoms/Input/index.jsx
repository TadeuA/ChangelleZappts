import React, { memo } from "react";
import { Input as In } from "./styles";

function Input({
  value = "",
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  type = "text",
  className = "",
  placeholder = "",
}) {
  return (
    <In
      // value={value}
      // onChange={(event) => onChange(event.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );
}

export default memo(Input);
