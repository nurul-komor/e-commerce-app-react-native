import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
export default function Nav({ title }) {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          padding: 8,
          borderRadius: 50,
        }}
      >
        <FontAwesome5 name="ellipsis-h" size={22} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
      <TouchableOpacity
        style={{ backgroundColor: "#fff", padding: 8, borderRadius: 50 }}
      >
        <Image
          style={styles.profile}
          source={{
            uri: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    paddingBottom: 15,
    paddingHorizontal: 8,
    paddingTop: 45,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "poppins-bold",
    fontSize: 20,
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});
