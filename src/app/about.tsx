import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import Card from "../components/containers/Card";

export default function about() {
  return (
    <Background>
      <View style={styles.mainContainer}>
        <HeaderWithTitle title="Sunshine Autos" />

        <Card>
          <View style={[styles.container, styles.firstContainer]}>
            <Text style={styles.title}>Sunshine Autos</Text>
            <Text style={styles.subtitle}>v.1.0</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.subtitle}>Desenvolvido por</Text>
            <Text style={styles.title}>Adnir Andrade</Text>
          </View>
          <View style={styles.githubContainer}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://github.com/adnir-andrade")
              }
            >
              <Image
                source={require("../../assets/images/github.png")}
                style={styles.github}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 30,
  },
  firstContainer: {
    marginTop: 45,
  },
  container: {
    marginBottom: 40,
    alignContent: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: "#fff",
    textShadowColor: "purple",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    textShadowColor: "cyan",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
  },
  githubContainer: {
    alignItems: "center",
  },
  github: {
    marginTop: 30,
    height: 80,
    width: 80,
  },
});
