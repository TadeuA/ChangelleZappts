import React, { useState, useCallback } from "react";
import Input from "../../molecules/AuthInput";
import Button from "../../atoms/Button";
import Or from "../../molecules/Or";
import Form from "../../atoms/Form";
import Google from "../../../assets/icons/googleLogo.svg";
import { isValidEmail, isValidPass } from "../../../common/checkers";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = useCallback(
    (event) => {
      event.preventDefault();
      console.log(email + password);
    },
    [email, password]
  );

  return (
    <Form onSubmit={handleLogIn}>
      <Input
        description="Users name or Email"
        value={email}
        onChange={setEmail}
        style={{ textTransform: "lowercase" }}
        onValidate={isValidEmail}
      />
      <Input
        description="Password"
        value={password}
        onChange={setPassword}
        type="password"
        onValidate={isValidPass}
      />
      <Button className="subAction" style={{ alignSelf: "flex-end" }}>
        Forgot Password?
      </Button>
      <Button
        type="submit"
        style={{
          marginTop: 30,
          marginBottom: 40,
          width: 175,
          alignSelf: "center",
        }}
      >
        Sign in
      </Button>
      <Or />
      <Button
        className="alternative"
        style={{ marginTop: 40, width: 270, alignSelf: "center" }}
      >
        <img src={Google} alt="Google" />
        Sign in with Google
      </Button>
    </Form>
  );
}
