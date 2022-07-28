import React from "react";
import { Image } from "native-base";

export const Logo = () => {
  return (
    <Image source={require("../../../assets/logo.png")} alt="logo da empresa" />
  );
};
