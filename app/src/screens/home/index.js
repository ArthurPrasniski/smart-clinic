import React from "react";
import { Box, Text, FlatList } from "native-base";
import { SafeAreaView } from "react-native";
import { Logo } from "../../components/image";
import { Card } from "../../components/card";
import { PrimaryButton } from "../../components/buttons/button-primary";

export const Home = ({ navigation }) => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];
  return (
    <SafeAreaView>
      <Box mt="50px" alignItems="center">
        <Logo />
      </Box>
      <Box mt="40px" alignItems="center" height="360px">
        <FlatList data={data} renderItem={({ item }) => <Card />} />
      </Box>
      <Box alignItems="center" mt="80px">
        <PrimaryButton onPress={() => navigation.navigate("RegisterScreen")}>
          <Text bold fontSize="xl" color="#FFFFFF">
            Cadastrar atendimento
          </Text>
        </PrimaryButton>
      </Box>
    </SafeAreaView>
  );
};
