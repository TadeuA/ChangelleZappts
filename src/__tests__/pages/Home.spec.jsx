import React from "react";
import Home from "../../pages/Home";
import { render } from "../../utils/CustomMethodsTesting";

describe("Home Page", () => {
  it("Display title Home", () => {
    render(<Home />);

    expect.stringContaining("Home");
  });
});
