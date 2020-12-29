import React from "react";
import SignIn from "../../pages/SignIn";
import LogIn from "../../components/organisms/LogIn";
import Salutation from "../../components/molecules/Salutation";
import { render } from "@testing-library/react";

jest.mock("react-router-dom", () => {
  return {
    useHistory: jest.fn().mockReturnValue({
      push: jest.fn(),
    }),
    Link: ({ children }) => children,
  };
});
describe("SignIn Page", () => {
  it("should be able to sign in", () => {
    const { debug } = render(<SignIn />);
    debug();
  });
});
