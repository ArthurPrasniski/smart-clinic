import React, { useState } from "react";
import { Box, Text, Button } from "native-base";
import { ModalDetails } from "../../components/modal";

export const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      w="300px"
      h="100px"
      mb="20px"
      borderRadius="10px"
      flexDirection="row"
      borderWidth="2"
      borderColor="#1A0DEA"
    >
      <Box paddingLeft="15px" paddingTop="9px">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb="-9px"
          mt="-15px"
        >
          <Text bold>
            Agendamento {""}
            <Text bold color="#1A0DEA">
              #1
            </Text>
          </Text>
          <Button variant="link" onPress={() => setIsOpen(true)}>
            Detalhes
          </Button>
        </Box>
        <ModalDetails isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Text bold>
          Nome do paciente: {""}
          <Text>Jose ipsum</Text>
        </Text>
        <Text bold>
          Email: {""}
          <Text>joseipsum@gmail.com</Text>
        </Text>
        <Text>
          Consulta agendada para {""}
          <Text bold>22/02/2022</Text>
        </Text>
      </Box>
    </Box>
  );
};
