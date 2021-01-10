import ThemeProvider from "../../hooks/Theme";
import { renderHook, act } from "@testing-library/react-hooks";
import { useToast, ToastProvider } from "../../hooks/Toast";

window.scrollTo = jest.fn();

jest.setTimeout(10000);

const wrapper = ({ children }) => (
  <ThemeProvider>
    <ToastProvider>{children}</ToastProvider>
  </ThemeProvider>
);
describe("Toast hook", () => {
  it("Should display toast", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useToast(), {
      wrapper,
    });
    act(() =>
      result.current.addToast({
        title: "Display toast",
        type: "success",
        description: "This toast shows in you screen",
      })
    );
    await waitForNextUpdate();

    expect.objectContaining({ type: "success" });
  });
});
