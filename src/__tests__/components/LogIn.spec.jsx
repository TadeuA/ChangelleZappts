import React from "react";

import LogIn from "../../components/organisms/LogIn";

import { render, fireEvent } from "@testing-library/react";
const mockedPush = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedPush,
    }),
    Link: ({ children }) => children,
  };
});
describe("SignIn Page", () => {
  it("should be able to sign in", () => {
    const { getByLabelText, getByText } = render(<LogIn />);
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Password");
    const buttonElement = getByText("Sign in");

    fireEvent.change(emailField, { target: { value: "zedope@example.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    fireEvent.click(buttonElement);
    expect(mockedPush).toHaveBeenCalledWith("/home");
  });
});
