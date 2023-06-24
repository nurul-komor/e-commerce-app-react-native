import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
export default function Home() {
  return (
    <View style={styles.container}>
      <Nav title="Home" />
      <Text>Home</Text>
      <Menu path="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    borderWidth: 1,
    backgroundColor: "#F8F8F8",
  },
});
