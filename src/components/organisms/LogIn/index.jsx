import React, { useState, useCallback } from "react";
import Input from "../../molecules/AuthInput";
import Button from "../../atoms/Button";
import Or from "../../molecules/Or";
import Form from "../../atoms/Form";
import Google from "../../../assets/icons/googleLogo.svg";
import { isValidEmail, isValidPass } from "../../../common/checkers";
import { useToast } from "../../../hooks";
import { useHistory } from "react-router-dom";
export default function LogIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badPass, setBadPass] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const { addToast } = useToast();

  const handleLogIn = useCallback(
    (event) => {
      event.preventDefault();
      if (email === "" || password === "") {
        addToast({
          title: "Empty field",
          type: "info",
          description: "No fields cannot be empty",
        });
        if (email === "") {
          setBadEmail(true);
        }
        if (password === "") {
          setBadPass(true);
        }
        return;
      }
      if (!isValidEmail(email) || !isValidPass(password)) {
        if (!isValidEmail(email)) {
          addToast({
            title: "Bad email",
            type: "error",
            description: "The email is incorrect",
          });
          setBadEmail(true);
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
      history.push("/home");
    },
    [email, password, addToast, setBadEmail, setBadPass]
  );
  return (
    <Form onSubmit={handleLogIn}>
      <Input
        description="Users name or Email"
        value={email}
        onChange={setEmail}
        style={{ textTransform: "lowercase" }}
        onValidate={isValidEmail}
        badToast={{ title: "Bad email", description: "The email is incorrect" }}
        submitting={badEmail}
        setState={setBadEmail}
      />
      <Input
        description="Password"
        value={password}
        onChange={setPassword}
        type="password"
        validate={false}
        submitting={badPass}
        setState={setBadPass}
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
