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
import { useToast } from "../../../hooks";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [badPass, setBadPass] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badName, setBadName] = useState(false);
  const { addToast } = useToast();
  const handleRegister = useCallback(
    (event) => {
      event.preventDefault();
      if (email === "" || password === "" || name === "") {
        addToast({
          title: "Empty field",
          type: "error",
          description: "No fields cannot be empty",
        });
        if (email === "") {
          setBadEmail(true);
        }
        if (password === "") {
          setBadPass(true);
        }
        if (name === "") {
          setBadName(true);
        }
      }
      if (
        !isValidEmail(email) ||
        !isValidPass(password) ||
        !isValidName(name)
      ) {
        if (!isValidEmail(email)) {
          addToast({
            title: "Bad email",
            type: "error",
            description: "The email is incorrect",
          });
          setBadEmail(true);
        }
        if (!isValidName(name)) {
          addToast({
            title: "Bad name",
            type: "error",
            description: "The name is incorrect",
          });
          setBadName(true);
        }
        if (!isValidPass(password)) {
          addToast({
            title: "Bad password",
            type: "error",
            description: "The password is incorrect",
          });
          setBadPass(true);
        }
        return;
      }
    },
    [email, password, addToast, setBadEmail, setBadPass, name, setBadName]
  );

  return (
    <Form onSubmit={handleRegister}>
      <Input
        description="Full Name"
        value={name}
        onChange={setName}
        onValidate={isValidName}
        submitting={badName}
        setState={setBadName}
        badToast={{
          title: "Bad name",
          description: "The name is incorrect",
        }}
      />
      <Input
        description="Users name or Email"
        value={email}
        onChange={setEmail}
        style={{ textTransform: "lowercase" }}
        onValidate={isValidEmail}
        submitting={badEmail}
        badToast={{ title: "Bad email", description: "The email is incorrect" }}
        setState={setBadEmail}
      />
      <Input
        description="Create Password"
        value={password}
        onChange={setPassword}
        type="password"
        onValidate={isValidPass}
        submitting={badPass}
        setState={setBadPass}
        badToast={{
          title: "Bad password",
          description: "The password cannot be less than 6 characters",
        }}
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
