import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Contributor({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>Contributor</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}
