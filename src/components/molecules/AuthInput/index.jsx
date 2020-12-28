import React, { useCallback, useState } from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { Div } from "./styles";
export default function AuthInput({
  value = "",
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  type = "text",
  className = "",
  placeholder = "",
  description = "",
  style = {},
  onValidate = () => {},
}) {
  const [badValidation, setBadValidations] = useState("");

  const handleValidation = useCallback(() => {
    if (!onValidate(value)) setBadValidations("warning");
  }, [setBadValidations, value, onValidate]);
  return (
    <Div>
      <Label>{description}</Label>
      <Input
        value={value}
        onChange={onChange}
        onFocus={() => {
          setBadValidations();
        }}
        onBlur={() => handleValidation()}
        type={type}
        className={badValidation}
        placeholder={placeholder}
        style={style}
      />
    </Div>
  );
}
