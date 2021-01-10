import React from "react";
import { render, fireEvent, waitFor } from "../../utils/CustomMethodsTesting";
import "@testing-library/jest-dom";
import AuthInput from "../../components/molecules/AuthInput";

const mockedOnValidate = jest.fn();
const mockedAddToast = jest.fn();
const mockedRemoveToast = jest.fn();

jest.mock("../../hooks/Toast", () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
      removeToast: mockedRemoveToast,
    }),
  };
});

describe("AuthInput component", () => {
  it("Should render highlight on input blur when something is wrong and set remove highlight with focus", async () => {
    const { getByPlaceholderText } = render(
      <AuthInput
        placeholder="email"
        onValidate={mockedOnValidate.mockReturnValue(false)}
        badToast={{
          title: "Invalid Value",
          description: "This value is invalid!",
        }}
      />
    );
    const inputField = getByPlaceholderText("email");
    fireEvent.blur(inputField);

    await waitFor(() => {
      expect(inputField).toHaveStyle("border-bottom:2px solid #F03;");
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({ type: "error" })
      );
    });
    fireEvent.focus(inputField);
    await waitFor(() => {
      expect(inputField).toHaveStyle("border-bottom:2px solid #707070;");
    });
  });
});
