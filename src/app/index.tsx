import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import FormInput from "../components/FormInput";
import ImageButton from "../components/ImageButton";
import FullScreen from "../components/containers/Fullscreen";
import Logo from "../components/Logo";
import Background from "../components/ui/Background";
import Card from "../components/containers/Card";

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
      <Background>
        <View style={styles.container}>
          <Logo />
          <View style={styles.form}>
            <Card>
              <FormInput
                label="USERNAME"
                value={username}
                onChangeText={setUsername}
              />
              <FormInput
                label="PASSWORD"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </Card>
          </View>

          <ImageButton onPress={handleLogin} />
        </View>
      </Background>
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
  container: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    paddingTop: 100,
    paddingHorizontal: 40,
  },
});
