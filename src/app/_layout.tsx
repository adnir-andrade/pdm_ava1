import { Stack } from "expo-router";
import React from "react";
import { Button } from "react-native";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <Button onPress={() => console.log("Clicked")} title="Update count" />
        ),
        title: "Sunshine Autos",
      }}
    ></Stack>
  );
}
