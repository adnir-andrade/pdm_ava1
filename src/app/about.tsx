import { View, Text } from "react-native";
import React from "react";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";

export default function about() {
  return (
    <View>
      <Background>
        <HeaderWithTitle title="Sunshine Autos" />

        <Text>Sunshine Autos</Text>
        <Text>v. 1.0</Text>

        <Text>Desenvolvido por</Text>
        <Text>Adnir Andrade</Text>
        <Text>Link para o github aqui</Text>
      </Background>
    </View>
  );
}
