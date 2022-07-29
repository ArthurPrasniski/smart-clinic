import React, { useState, useCallback } from "react";
import { Box, Text, TextArea } from "native-base";
import { InputPrimary } from "../../components/inputs/input";
import { Logo } from "../../components/image";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { CalendarButton } from "../../components/buttons/button-calendar";
import { PrimaryButton } from "../../components/buttons/button-primary";
import { SecondaryButton } from "../../components/buttons/button-secondary";
import { db } from "../../config";
import { collection, addDoc } from "firebase/firestore";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";

export const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState("date");
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const usersCollectionRef = collection(db, "Scheduling");
  
  function create(name, email, date, description) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise((resolve, reject) => {
      return axios
        .post(
          `https://send-email-scheduling.herokuapp.com/send-email`,
          { name, email, date, description },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setOpen(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setOpen(true);
    }
    setMode(currentMode);
  };

  const handleChangeName = (value) => setName(value);
  const handleChangeEmail = (value) => setEmail(value);
  const handleChangeDate = (value) => setDate(value);
  const handleChangeDescription = (value) => setDescription(value);

  const createScheduling = async () => {
    await addDoc(
      usersCollectionRef,
      {
        name: name || null,
        email: email || null,
        date: date || null,
        description: description || null,
      },
      navigation.navigate("Home")
    );
    try {
      create(name, email, date, description);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <Box padding="45">
          <KeyboardAvoidingView behavior="position">
            <Box alignItems="center">
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
              <InputPrimary value={name} onChangeText={handleChangeName} />
            </Box>
            <Box mt="20px">
              <Box mb="10px">
                <Text bold fontSize="xs">
                  {" "}
                  Email
                </Text>
              </Box>
              <InputPrimary value={email} onChangeText={handleChangeEmail} />
            </Box>
            <Box mt="20px">
              <Box mb="10px">
                <Text bold fontSize="xs">
                  Selecione a data do atendimento
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center">
                <Box width="220px" mr="10px">
                  <InputPrimary value={text} onChangeText={handleChangeDate} />
                </Box>
                <CalendarButton onPress={() => showMode("date")} />
                {open && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}
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
                  value={description}
                  onChangeText={handleChangeDescription}
                />
              </Box>
              <Box alignItems="center" mt="25px">
                <PrimaryButton width="220px" onPress={createScheduling}>
                  <Text bold color="#FFFFFF" fontSize="xl">
                    Salvar
                  </Text>
                </PrimaryButton>
                <Box mt="15px">
                  <SecondaryButton onPress={() => navigation.navigate("Home")}>
                    <Text bold fontSize="xl">
                      Voltar
                    </Text>
                  </SecondaryButton>
                </Box>
              </Box>
            </Box>
          </KeyboardAvoidingView>
        </Box>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
