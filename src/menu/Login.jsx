import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.description}>Lorem ipsum dolor sit amet.</Text>
      <View>
        <Text style={styles.textLabel}>Enter you email</Text>
        <TextInput style={styles.textInput} autoCapitalize="none" />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.textLabel}>Enter you Password</Text>
        <TextInput style={styles.textInput} secureTextEntry={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "poppins-regular",
    padding: 30,
    backgroundColor: "#fff",
    height: "85%",
  },
  heading: {
    fontSize: 30,
    fontFamily: "poppins-bold",
  },
  description: {
    fontFamily: "poppins-regular",
    fontSize: 15,
    color: "#636e72",
    marginBottom: 40,
  },
  textLabel: {
    fontFamily: "poppins-regular",
    fontSize: 15,
    color: "#000",
  },
  textInput: {
    borderColor: "#c9d6df",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
});
