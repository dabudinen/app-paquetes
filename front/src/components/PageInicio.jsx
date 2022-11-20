import React from "react";
import { Featured } from "./Featured";
import { Header } from "./Header";
import { BannerImage } from "./BannerImage";

export default function PageInicio() {
  return (
    <>
      <Header />
      <Featured />
      <BannerImage />
    </>
  );
}
