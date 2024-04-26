import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useRouter, useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";

type HeaderWithTitleProps = {
  title: string;
};

export default function HeaderWithMenu({ title }: HeaderWithTitleProps) {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();
  const route = useRoute();
  const navigation = useNavigation();

  const options = route?.name === "about" ? ["Logout"] : ["About", "Logout"];
  const destructiveButtonIndex = options.indexOf("Logout");

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            if (route?.name === "about") {
              navigation.reset({
                index: 0,
                routes: [{ name: "index" }],
              });
              break;
            }
            router.push("/about");
            break;
          case 1:
            navigation.reset({
              index: 0,
              routes: [{ name: "index" }],
            });
            break;
        }
      }
    );
  };

  return (
    <Stack.Screen
      options={{
        headerShown: true,
        headerBackground: () => (
          <ImageBackground
            source={require("../../../assets/images/logo.png")}
            style={styles.background}
            resizeMode="contain"
          />
        ),
        title,
        headerRight: () => (
          <TouchableOpacity style={styles.menuIcon}>
            <Ionicons
              name="menu-outline"
              size={24}
              color="purple"
              onPress={handleOpen}
            />
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          color: "white",
        },
        headerTintColor: "purple",
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
  menuIcon: {
    padding: 5,
  },
  background: {
    height: "100%",
    opacity: 0.9,
    backgroundColor: "black",
  },
});
