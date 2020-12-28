import React from "react";
import { CustomCarousel } from "./styles";

export default function Carousel({ children }) {
  return (
    <CustomCarousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      autoPlay
      infiniteLoop
    >
      {children}
    </CustomCarousel>
  );
}
