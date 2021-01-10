import React from "react";

import SingUp from "../../pages/SignUp";

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

describe("SignUp Page", () => {
  beforeEach(() => {
    mockedPush.mockClear();
    mockedAddToast.mockClear();
  });
  it("should be able to sign up", () => {
    const { getByLabelText, getByText } = render(<SingUp />);
    const nameField = getByLabelText("Full Name");
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Create Password");
    const buttonElement = getByText("Sign up");

    fireEvent.change(nameField, { target: { value: "José do Pé" } });
    fireEvent.change(emailField, { target: { value: "zedope@example.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    fireEvent.click(buttonElement);

    expect(mockedPush).toHaveBeenCalledWith("/signin");
  });

  it("should display an message if sing up success", () => {
    const { getByLabelText, getByText } = render(<SingUp />);
    const nameField = getByLabelText("Full Name");
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Create Password");
    const buttonElement = getByText("Sign up");

    fireEvent.change(nameField, { target: { value: "José do Pé" } });
    fireEvent.change(emailField, { target: { value: "zedope@example.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    fireEvent.click(buttonElement);

    expect(mockedAddToast).toHaveBeenCalledWith(
      expect.objectContaining({ type: "success" })
    );
  });

  it("should display an error if sing up fails because of name", () => {
    const { getByLabelText, getByText } = render(<SingUp />);
    const nameField = getByLabelText("Full Name");
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Create Password");
    const buttonElement = getByText("Sign up");

    fireEvent.change(nameField, { target: { value: "Zézão" } });
    fireEvent.change(emailField, {
      target: { value: "zedope@example.com-email" },
    });
    fireEvent.change(passwordField, { target: { value: "1234567" } });

    fireEvent.click(buttonElement);
    expect(mockedAddToast).toHaveBeenCalledWith(
      expect.objectContaining({ type: "error" })
    );
  });

  it("should display an error if sing up fails because of email", () => {
    const { getByLabelText, getByText } = render(<SingUp />);
    const nameField = getByLabelText("Full Name");
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Create Password");
    const buttonElement = getByText("Sign up");

    fireEvent.change(nameField, { target: { value: "José do Pé" } });
    fireEvent.change(emailField, { target: { value: "invalid-email" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    fireEvent.click(buttonElement);

    expect(mockedAddToast).toHaveBeenCalledWith(
      expect.objectContaining({ type: "error" })
    );
  });

  it("should display an error if sing up fails because of password", () => {
    const { getByLabelText, getByText } = render(<SingUp />);
    const nameField = getByLabelText("Full Name");
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Create Password");
    const buttonElement = getByText("Sign up");

    fireEvent.change(nameField, { target: { value: "José do Pé" } });
    fireEvent.change(emailField, {
      target: { value: "zedope@example.com-email" },
    });
    fireEvent.change(passwordField, { target: { value: "123" } });

    fireEvent.click(buttonElement);
    expect(mockedAddToast).toHaveBeenCalledWith(
      expect.objectContaining({ type: "error" })
    );
  });

  it("should display an info if sing up no execute because of empty fields", () => {
    const { getByLabelText, getByText } = render(<SingUp />);
    const nameField = getByLabelText("Full Name");
    const emailField = getByLabelText("Users name or Email");
    const passwordField = getByLabelText("Create Password");
    const buttonElement = getByText("Sign up");

    fireEvent.change(nameField, { target: { value: "José do Pé" } });
    fireEvent.change(emailField, {
      target: { value: "" },
    });
    fireEvent.change(passwordField, { target: { value: "1234567" } });

    fireEvent.click(buttonElement);
    expect(mockedAddToast).toHaveBeenCalledWith(
      expect.objectContaining({ type: "info" })
    );
  });
});
