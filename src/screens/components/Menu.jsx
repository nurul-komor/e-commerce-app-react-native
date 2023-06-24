import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const Menu = ({ path }) => {
  const navigation = useNavigation();
  const navigate = (uri) => {
    navigation.navigate(uri);
  };
  return (
    <View style={styles.menuContainer}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigate("Home")}>
          <Ionicons
            name="home"
            size={24}
            color="black"
            style={[
              { fontSize: 20 },
              path == "Home" ? styles.activeIcon : "",
              styles.icon,
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Login")}>
          <FontAwesome
            name="shopping-cart"
            size={26}
            color="black"
            style={[
              { fontSize: 20 },
              path == "Cart" ? styles.activeIcon : "",
              styles.icon,
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            name="heart"
            size={24}
            color="black"
            style={[
              { fontSize: 20 },
              path == "Fav" ? styles.activeIcon : "",
              styles.icon,
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            name="user-circle-o"
            color="black"
            style={[
              { fontSize: 20 },
              path == "Profile" ? styles.activeIcon : "",
              styles.icon,
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
  },
  menu: {
    position: "absolute",
    bottom: -10,
    left: 0,
    right: 0,
    width: "100%",
    padding: 5,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  activeIcon: {
    color: "#fff",
    position: "relative",
    bottom: 12,
    backgroundColor: "#ff7675",
    borderColor: "#fff",
    shadowOffset: { width: 3, height: 10 },
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 4, // Only for Android
  },
  icon: {
    padding: 10,
    borderWidth: 1,
    borderColor: "transparent",
    marginBottom: 8,
    borderRadius: 50,
  },
});
