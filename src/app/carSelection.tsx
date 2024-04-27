import { View } from "react-native";
import React from "react";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import CarList from "../components/list/CarList";

export default function carSelection() {
  return (
    <View>
      <Background>
        <HeaderWithTitle title="Sunshine Autos" />
        <CarList />
      </Background>
    </View>
  );
}
