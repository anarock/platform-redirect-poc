import React from "react";
import { StyleSheet, View, Image, Button, Alert, Linking } from "react-native";

// iOS Simulator: use "localhost". Android emulator: use "10.0.2.2".
// Real device (same Wi‑Fi as your machine): use your computer's local IP (e.g. 192.168.1.5). Find it: System Settings → Wi‑Fi → your network → IP.
const LOCAL_IP = "10.0.2.2";
const FILE_URL = `http://${LOCAL_IP}:4000/file`;

export default function App() {
  const openFile = () => {
    Linking.openURL(FILE_URL).catch(() =>
      Alert.alert(
        "Could not open URL",
        "On a real device, set LOCAL_IP in App.js to your computer's IP (e.g. 192.168.1.x). Server must be running on that machine.",
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: FILE_URL }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.button}>
        <Button title="Open File" onPress={openFile} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 24,
  },
  button: {
    minWidth: 160,
  },
});
