import React from "react";
import Carousel from "../../atoms/Carousel";
import { Div } from "./styles";
export default function CompleteCarousel({
  slides = [{ key: "", image: "", title: "", description: "" }],
}) {
  return (
    <Div>
      <Carousel>
        {slides.map((slide) => (
          <>
            <img key={slide.key} src={slide.image} alt={slide.title} />
            <h3 className="title">{slide.title}</h3>
            <p className="description">{slide.description}</p>
          </>
        ))}
      </Carousel>
    </Div>
  );
}
