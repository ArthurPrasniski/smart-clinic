import React from "react";
import { Box, Text, TextArea } from "native-base";
import { InputPrimary } from "../../components/inputs/input";
import { Logo } from "../../components/image";
import { SafeAreaView } from "react-native";
import { CalendarButton } from "../../components/buttons/button-calendar";
import { PrimaryButton } from "../../components/buttons/button-primary";
import { SecondaryButton } from "../../components/buttons/button-secondary";

export const RegisterScreen = () => {
  return (
    <Box padding="45">
      <SafeAreaView>
        <Box mt="50px" alignItems="center">
          <Logo />
        </Box>
        <Box mt="40px">
          <Text bold fontSize="xl">
            Cadastar agendamento
          </Text>
        </Box>
        <Box mt="30px">
          <Box mb="10px">
            <Text bold fontSize="xs">
              {" "}
              Nome do paciente
            </Text>
          </Box>
          <InputPrimary />
        </Box>
        <Box mt="20px">
          <Box mb="10px">
            <Text bold fontSize="xs">
              {" "}
              Email
            </Text>
          </Box>
          <InputPrimary />
        </Box>
        <Box mt="20px">
          <Box mb="10px">
            <Text bold fontSize="xs">
              Selecione a data do atendimento
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <Box width="220px" mr="10px">
              <InputPrimary />
            </Box>
            <CalendarButton />
          </Box>
          <Box mt="20px">
            <Box mb="10px">
              <Text bold fontSize="xs">
                Descrição
              </Text>
            </Box>
            <TextArea
              borderRadius="10px"
              borderColor="#1A0DEA"
              borderWidth="2px"
            />
          </Box>
          <Box alignItems="center" mt="25px">
            <PrimaryButton>
              <Text bold color="#FFFFFF" fontSize="xl">
                Salvar
              </Text>
            </PrimaryButton>
            <Box mt="15px">
              <SecondaryButton>
                <Text bold fontSize="xl">
                  Voltar
                </Text>
              </SecondaryButton>
            </Box>
          </Box>
        </Box>
      </SafeAreaView>
    </Box>
  );
};
