import React from "react";
import { Link } from "react-router-dom";
import Register from "../../components/organisms/Register";
import Salutation from "../../components/molecules/Salutation";
export default function SignUp() {
  return (
    <>
      <Salutation>Getting Started</Salutation>
      <Register />
      <span>By signing up, you agree to Invision</span>
      <span>
        <Link to="/signup"> Terms of Conditions </Link>
        and
        <Link to="/signup"> Privacy Policy </Link>
      </span>
      <span style={{ marginTop: 20 }}>
        Already on Invision?
        <Link to="/signin"> Log in</Link>
      </span>
    </>
  );
}
