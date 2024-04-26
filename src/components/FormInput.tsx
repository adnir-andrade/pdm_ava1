import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React, { useState } from "react";

type FormInput = {
  label?: string;
} & TextInputProps;

export default function FormInput({ label, ...rest }: FormInput) {
  const [focus, setFocus] = useState(false);

  return (
    <View style={[styles.container, focus && styles.focusContainer]}>
      {label && <Text style={[styles.label, styles.neonText]}>{label}</Text>}
      <TextInput
        {...rest}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[styles.input]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    width: "100%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 13,
  },
  focusContainer: {
    borderBottomColor: "purple",
  },
  neonText: {
    color: "#fff",
    textShadowColor: "purple",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  input: {
    color: "#fff",
    textShadowColor: "cyan",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});
