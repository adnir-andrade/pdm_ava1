import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import FormInput from "../components/FormInput";
import ImageButton from "../components/ImageButton";
import FullScreen from "../components/containers/Fullscreen";
import Logo from "../components/Logo";

export default function index() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // if (username === "teste" && password === "123")
    router.push("/carSelection");
  };

  return (
    <FullScreen>
      <Logo />

      <FormInput label="Username" value={username} onChangeText={setUsername} />
      <FormInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <ImageButton onPress={handleLogin} title="Login!" />
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  registerLink: {
    fontSize: 12,
    textAlign: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});
