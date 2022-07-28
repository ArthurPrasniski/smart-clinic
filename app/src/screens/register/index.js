import React from "react";
import { Center, Box, Text } from "native-base";
import { InputPrimary } from "../../components/inputs/input";
import { Logo } from "../../components/image";
import { SafeAreaView } from "react-native";

export const RegisterScreen = () => {
  return (
    <Box padding="45">
      <SafeAreaView>
        <Box mt="50px" alignItems="center">
          <Logo />
        </Box>
        <Box mt="50px">
          <Text bold fontSize="xl">
            Cadastar agendamento
          </Text>
        </Box>
        <Box mt="50px">
          <Box mb="10px">
            <Text bold> Nome do paciente</Text>
          </Box>
          <InputPrimary />
        </Box>
      </SafeAreaView>
    </Box>
  );
};
