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
          <div key={slide.key}>
            <img src={slide.image} alt={slide.title} />
            <h3 className="title">{slide.title}</h3>
            <p className="description">{slide.description}</p>
          </div>
        ))}
      </Carousel>
    </Div>
  );
}
