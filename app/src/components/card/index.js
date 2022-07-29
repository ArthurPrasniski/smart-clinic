import React, { useState } from "react";
import { Box, Text, Button } from "native-base";
import { ModalDetails } from "../../components/modal";

export const Card = ({ name, email, date, description }) => {
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
            Agendamento
          </Text>
          <Button variant="link" onPress={() => setIsOpen(true)}>
            Detalhes
          </Button>
        </Box>
        <ModalDetails isOpen={isOpen} setIsOpen={setIsOpen} name={name} date={date} description={description}/>
        <Text bold>
          Nome do paciente: {""}
          <Text>{name}</Text>
        </Text>
        <Text bold>
          Email: {""}
          <Text>{email}</Text>
        </Text>
        <Text>
          Consulta agendada para {""}
          <Text bold>{date}</Text>
        </Text>
      </Box>
    </Box>
  );
};
