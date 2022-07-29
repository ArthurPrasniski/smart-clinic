import React from "react";
import {IconButton, Icon} from 'native-base'
import { Feather } from "@expo/vector-icons";

export const CloseButton = ({onPress}) => {
  return (
    <IconButton
      width="24px"
      backgroundColor="transparent"
      size="lg"
      variant="solid"
      icon={<Icon as={Feather} name="x-circle" color="#1A0DEA" />}
      borderRadius="full"
      onPress={onPress}
    />
  );
};
