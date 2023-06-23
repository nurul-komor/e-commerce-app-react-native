import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
export default function Login() {
  const [agree, setAgree] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.description}>please fill the field to continue</Text>
      <View>
        <Text style={styles.textLabel}>Enter you email</Text>
        <TextInput style={styles.textInput} autoCapitalize="none" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.textLabel}>Enter you Password</Text>
        <TextInput style={styles.textInput} secureTextEntry={true} />
      </View>
      <Text
        style={[
          styles.inputGroup,
          {
            display: "flex",
            flexWrap: "wrap",
          },
        ]}
      >
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#0984e3" : undefined}
          style={{ marginRight: 5, display: "flex" }}
        />
        <Text
          onPress={() => setAgree(!agree)}
          style={{ padding: 5, marginBottom: 10, display: "flex" }}
        >
          {"  "}
          Do you agree with terms and conditions?
        </Text>
      </Text>
      <View style={styles.inputGroup}>
        <TouchableOpacity disabled={agree ? false : true}>
          <Text
            style={[
              styles.buttonStyle,
              { backgroundColor: agree ? "#0984e3" : "#636e72" },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
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
    height: "95%",
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
  inputGroup: {
    marginVertical: 10,
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
  buttonStyle: {
    width: "100%",
    marginTop: 10,
    textAlign: "center",
    fontFamily: "poppins-medium",
    letterSpacing: -0.5,
    fontSize: 16,
    color: "#FFF",
    paddingVertical: 5,
    borderRadius: 3,
  },
});
