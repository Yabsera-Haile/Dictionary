import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function WordDefn({ navigation }) {
  const rating = navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("word")}
        </Text>
        <Text>{navigation.getParam("language")}</Text>
        <Text>{navigation.getParam("type")}</Text>
        <Text>{navigation.getParam("defn")}</Text>
        <Text>{navigation.getParam("example")}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
