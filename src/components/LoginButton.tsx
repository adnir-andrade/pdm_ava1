import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type FormInput = {} & TouchableOpacityProps;

export default function LoginButton({ ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        source={require("../../assets/images/LOGIN-4-26-2024.png")}
        style={styles.bg}
        resizeMode="contain"
      ></ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  bg: {
    height: 100,
  },
});
