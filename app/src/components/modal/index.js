import React from "react";
import { Modal, Text, Box } from "native-base";
import { CloseButton } from "../../components/buttons/button-close";

export const ModalDetails = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <Modal.Content width="300px" height="400px" pt="20px" pl="20px" pr="20px">
        <Box
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
          <Text bold fontSize="md">
            Agendamento #1
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
            Jose Ipsum
          </Text>
          <Text bold fontSize="md">
            22/02/2022
          </Text>
        </Box>
        <Box mt="30px">
          <Text bold fontSize="md">
            Descrição
          </Text>
        </Box>
        <Box mt="12px">
          <Text>
            Descrição da consulta contando os sintomas do paciente e suas dores
            e afins.
          </Text>
        </Box>
      </Modal.Content>
    </Modal>
  );
};
