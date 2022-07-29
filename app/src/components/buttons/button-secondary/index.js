import React from "react";
import {Button} from 'native-base'
export const SecondaryButton = ({children, onPress}) => {
  return (
    <Button backgroundColor='transparent' borderRadius='full' onPress={onPress}>
      {children}
    </Button>
  )
}