import React from "react";
import SignIn from "../../pages/SignIn";

import { render, fireEvent } from "../../utils/CustomMethodsTesting";
const mockedPush = jest.fn();
const mockedAddToast = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedPush,
    }),
    Link: ({ children }) => children,
  };
});
jest.mock("../../hooks/Toast", () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

describe("SignIn Page", () => {
  beforeEach(() => {
    mockedPush.mockClear();
    mockedAddToast.mockClear();
  });
  it("should be able to sign in", () => {
    const { getByLabelText, getByText } = render(<SignIn />);
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Password");
    const buttonElement = getByText("Sign in");

    fireEvent.change(emailField, { target: { value: "zedope@example.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    fireEvent.click(buttonElement);
    expect(mockedPush).toHaveBeenCalledWith("/home");
  });

  it("should display an error if login fails because of email", () => {
    const { getByLabelText, getByText } = render(<SignIn />);
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Password");
    const buttonElement = getByText("Sign in");

    fireEvent.change(emailField, { target: { value: "invalid-email" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    fireEvent.click(buttonElement);
    expect(mockedAddToast).toHaveBeenCalledWith(
      expect.objectContaining({ type: "error" })
    );
  });

  it("should display an error if login fails because of password", () => {
    const { getByLabelText, getByText } = render(<SignIn />);
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Password");
    const buttonElement = getByText("Sign in");

    fireEvent.change(emailField, {
      target: { value: "zedope@example.com-email" },
    });
    fireEvent.change(passwordField, { target: { value: "123" } });

    fireEvent.click(buttonElement);
    expect(mockedAddToast).toHaveBeenCalledWith(
      expect.objectContaining({ type: "error" })
    );
  });

  it("should display an info if login no execute because of empty fields", () => {
    const { getByLabelText, getByText } = render(<SignIn />);
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Password");
    const buttonElement = getByText("Sign in");

    fireEvent.change(emailField, {
      target: { value: "zedope@example.com-email" },
    });
    fireEvent.change(passwordField, { target: { value: "" } });

    fireEvent.click(buttonElement);
    expect(mockedAddToast).toHaveBeenCalledWith(
      expect.objectContaining({ type: "info" })
    );
  });
});
