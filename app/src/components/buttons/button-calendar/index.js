import React from "react";
import {IconButton, Icon} from 'native-base'
import { Feather } from "@expo/vector-icons";

export const CalendarButton = ({onPress}) => {
  return (
    <IconButton
      width="50px"
      backgroundColor="#1A0DEA"
      size="lg"
      variant="solid"
      icon={<Icon as={Feather} name="calendar" color="#FFFFFF" />}
      borderRadius="full"
      onPress={onPress}
    />
  );
};
