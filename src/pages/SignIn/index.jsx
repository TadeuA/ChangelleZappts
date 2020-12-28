import React from "react";
import Input from "../../components/atoms/Input";
import Label from "../../components/atoms/Label";
import carouselImg from "../../assets/images/carousel0.png";
import Google from "../../assets/icons/googleLogo.svg";
import Button from "../../components/atoms/Button";
import Carousel from "../../components/molecules/Carousel";
const slides = [
  {
    key: 1,
    title: "Marcenas mattis egestas",
    description:
      "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    image: carouselImg,
  },
  {
    key: 2,
    title: "Marcenas mattis egestas",
    description:
      "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    image: carouselImg,
  },
  {
    key: 3,
    title: "Marcenas mattis egestas",
    description:
      "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    image: carouselImg,
  },
  {
    key: 4,
    title: "Marcenas mattis egestas",
    description:
      "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    image: carouselImg,
  },
];

export default function SignIn() {
  return (
    <div style={{ width: "100%", background: "#FFF" }}>
      <Label>Users name or Email</Label>
      <Input />

      <Button className="alternative">
        <img src={Google} alt="Google" />
        Sign in with Google
      </Button>
    </div>
  );
}
