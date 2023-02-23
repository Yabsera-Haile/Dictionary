import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { state } from "./../store";

export default function Register({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>Register</Text>
      <Button
        title="Navigate to Edit Dictionary"
        onPress={() => {
          state.login = !state.login;
          navigation.navigate("Dictionary");
        }}
      />
    </View>
  );
}
