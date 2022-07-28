import React from "react";
import { Input } from "native-base";

export const InputPrimary = (type) => {
  return <Input size="xl" borderRadius="10px" borderColor="#1A0DEA" borderWidth='2px' type={type}/>;
};
