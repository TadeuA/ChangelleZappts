import React from "react";
import { render, fireEvent } from "../../utils/CustomMethodsTesting";
import Carousel from "../../components/molecules/Carousel";
import slidesCarousel from "../../utils/slides";
import "@testing-library/jest-dom";

describe("Carousel component", () => {
  it("Should display slide", () => {
    const { getAllByAltText } = render(<Carousel slides={slidesCarousel} />);
    const sliderElement = getAllByAltText("Marcenas mattis egestas");

    expect(sliderElement).toBeTruthy();
  });

  it("Should click button and change size", () => {
    const { getAllByRole } = render(<Carousel slides={slidesCarousel} />);
    const buttonsElement = getAllByRole("button");
    const buttonElement = buttonsElement[2];
    fireEvent.click(buttonElement);

    expect(buttonElement).toHaveStyle("width:26px; opacity:1;");
  });
});
