import React, { useCallback, useState, useEffect } from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { Div } from "./styles";
import { useToast } from "../../../hooks";
export default function AuthInput({
  value,
  onChange = () => {},
  type = "text",
  placeholder = "",
  description = "",
  style,
  validate,
  onValidate = () => {},
  badToast = { title: "Empty field", description: "No fields cannot be empty" },
  submitting,
  setState = () => {},
  id = "",
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
      <Label reference={id}>{description}</Label>
      <Input
        value={value}
        onChange={onChange}
        onFocus={() => {
          setBadValidations();
        }}
        onBlur={() => !validate && handleValidation()}
        type={type}
        className={badValidation}
        placeholder={placeholder}
        style={style}
        id={id}
      />
    </Div>
  );
}
