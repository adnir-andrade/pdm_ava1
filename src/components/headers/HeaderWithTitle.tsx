import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";

type HeaderWithTitleProps = {
  title: string;
};

export default function HeaderWithTitle({ title }: HeaderWithTitleProps) {
  const { showActionSheetWithOptions } = useActionSheet();

  const options = ["About", "Logout"];
  const destructiveButtonIndex = 1;

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            console.log("About");
            <Link replace href="/about">
              Login
            </Link>;
            break;
          case 1:
            console.log("Logout");
            break;
        }
      }
    );
  };

  return (
    <Stack.Screen
      options={{
        headerShown: true,
        title,
        headerRight: () => (
          <TouchableOpacity style={styles.menuIcon}>
            <Ionicons
              name="menu-outline"
              size={24}
              color="black"
              onPress={handleOpen}
            />
          </TouchableOpacity>
        ),
      }}
    ></Stack.Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  menuIcon: {
    padding: 5,
  },
});
