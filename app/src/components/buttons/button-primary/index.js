import React from "react";
import {Button} from 'native-base'
export const PrimaryButton = ({children, onPress, width}) => {
  return (
    <Button backgroundColor='#5DDDFF' borderRadius='full' onPress={onPress} width={width}>
      {children}
    </Button>
  )
}