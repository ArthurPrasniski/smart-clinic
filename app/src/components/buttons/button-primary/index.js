import React from "react";
import {Button} from 'native-base'
export const PrimaryButton = ({children}) => {
  return (
    <Button backgroundColor='#5DDDFF' borderRadius='full' width='220px'>
      {children}
    </Button>
  )
}