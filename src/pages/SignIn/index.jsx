import React from "react";
import { Link } from "react-router-dom";
import LogIn from "../../components/organisms/LogIn";
import Salutation from "../../components/molecules/Salutation";
export default function SignIn() {
  return (
    <>
      <Salutation>Welcome to Invision</Salutation>
      <LogIn />
      <span>
        New Invision?
        <Link to="/signup"> Create Account</Link>
      </span>
    </>
  );
}
