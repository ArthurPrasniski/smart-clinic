import React from "react";
import { Modal, Text, Box } from "native-base";
import { CloseButton } from "../../components/buttons/button-close";

export const ModalDetails = ({ isOpen, setIsOpen, name, date, description }) => {
  return (
    <Modal isOpen={isOpen}>
      <Modal.Content width="300px" height="400px" pt="20px" pl="20px" pr="20px">
        <Box
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
          <Text bold fontSize="md">
            Agendamento
          </Text>
          <CloseButton
            onPress={() => {
              setIsOpen(false);
            }}
          />
        </Box>
        <Box
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
          <Text bold fontSize="md">
            {name}
          </Text>
          <Text bold fontSize="md">
            {date}
          </Text>
        </Box>
        <Box mt="30px">
          <Text bold fontSize="md">
            Descrição
          </Text>
        </Box>
        <Box mt="12px">
          <Text>
           {description}
          </Text>
        </Box>
      </Modal.Content>
    </Modal>
  );
};
