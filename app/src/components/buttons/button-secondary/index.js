import React from "react";
import {Button} from 'native-base'
export const SecondaryButton = ({children}) => {
  return (
    <Button backgroundColor='transparent' borderRadius='full'>
      {children}
    </Button>
  )
}