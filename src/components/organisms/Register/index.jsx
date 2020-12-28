import React, { useState, useCallback } from "react";
import Input from "../../molecules/AuthInput";
import Button from "../../atoms/Button";
import Or from "../../molecules/Or";
import Form from "../../atoms/Form";
import Google from "../../../assets/icons/googleLogo.svg";
import {
  isValidEmail,
  isValidPass,
  isValidName,
} from "../../../common/checkers";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = useCallback(
    (event) => {
      event.preventDefault();
      console.log(email + password);
    },
    [email, password]
  );

  return (
    <Form onSubmit={handleRegister}>
      <Input
        description="Full Name"
        value={name}
        onChange={setName}
        onValidate={isValidName}
      />
      <Input
        description="Users name or Email"
        value={email}
        onChange={setEmail}
        style={{ textTransform: "lowercase" }}
        onValidate={isValidEmail}
      />
      <Input
        description="Create Password"
        value={password}
        onChange={setPassword}
        type="password"
        onValidate={isValidPass}
      />

      <Button
        type="submit"
        style={{
          marginTop: 30,
          marginBottom: 40,
          width: 175,
          alignSelf: "center",
        }}
      >
        Sign up
      </Button>
      <Or />
      <Button
        className="alternative"
        style={{ marginTop: 40, width: 270, alignSelf: "center" }}
      >
        <img src={Google} alt="Google" />
        Sign up with Google
      </Button>
    </Form>
  );
}
