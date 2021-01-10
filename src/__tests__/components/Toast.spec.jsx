import React from "react";
import { render, fireEvent, waitFor } from "../../utils/CustomMethodsTesting";
import "@testing-library/jest-dom";
import Toast from "../../components/organisms/Toast";
import { uuid } from "uuidv4";

const id = uuid();
window.scrollTo = jest.fn();
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
describe("Toast component", () => {
  it("Should remove toast to screen", async () => {
    const { getByTestId } = render(
      <Toast
        messages={[
          {
            id,
            title: "Test Toast",
            type: "info",
            description: "Handle this toast",
          },
        ]}
      />
    );
    const buttonElement = getByTestId("button-toast");
    fireEvent.click(buttonElement);
    await waitFor(() => {
      expect(mockedRemoveToast).toHaveBeenCalledWith(
        expect.stringContaining(id)
      );
    });
  });
});
