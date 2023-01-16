import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Logo, Button } from "ui";

export default function Native() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.header}>Native</Text>
      <Button
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
