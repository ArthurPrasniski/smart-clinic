import React, { useState, useEffect } from "react";
import { Box, Text, FlatList } from "native-base";
import { SafeAreaView } from "react-native";
import { Logo } from "../../components/image";
import { Card } from "../../components/card";
import { PrimaryButton } from "../../components/buttons/button-primary";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config";

export const Home = ({ navigation }) => {
  const [scheduling, setScheduling] = useState([]);

  const usersCollectionRef = collection(db, "Scheduling");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setScheduling(data.docs.map((doc) => ({ ...doc.data([]), id: doc.id })));
    };
    getUsers(scheduling);
  }, []);

  // const date = new Date(scheduling.date);
  // let dateFormated = new Intl.DateTimeFormat("pt-BR").format(date);
  // console.log(dateFormated)

  return (
    <SafeAreaView>
      <Box mt="50px" alignItems="center">
        <Logo />
      </Box>
      <Box mt="40px" alignItems="center" height="360px">
        <FlatList
          data={scheduling}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              email={item.email}
              date={item.date.toDate().toLocaleDateString("pt-BR")}
              description={item.description}
            />
          )}
        />
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
