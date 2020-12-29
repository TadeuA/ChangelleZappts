import React, { useCallback, useState, useEffect } from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { Div } from "./styles";
import { useToast } from "../../../hooks";
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
  validate = true,
  onValidate = () => {},
  badToast = {
    title: "",
    description: "",
  },
  submitting,
  setState = () => {},
}) {
  const [badValidation, setBadValidations] = useState("");

  const { addToast } = useToast();
  useEffect(() => {
    if (submitting) {
      setBadValidations("warning");
      setState(false);
    }
  }, [submitting, setState]);
  const handleValidation = useCallback(() => {
    if (!onValidate(value)) {
      setBadValidations("warning");
      addToast({
        title: badToast.title,
        type: "error",
        description: badToast.description,
      });
    }
  }, [setBadValidations, value, onValidate, badToast, addToast]);

  return (
    <Div>
      <Label>{description}</Label>
      <Input
        value={value}
        onChange={onChange}
        onFocus={() => {
          setBadValidations();
        }}
        onBlur={() => validate && handleValidation()}
        type={type}
        className={badValidation}
        placeholder={placeholder}
        style={style}
      />
    </Div>
  );
}
