import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(5);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.numero}>{contador}</Text>

      <Pressable onPress={() => setContador(contador + 1)} style={styles.suma}>
        <Text style={styles.letra}>+1</Text>
      </Pressable>

      <Pressable onPress={() => setContador(contador - 1)} style={styles.resta}>
        <Text style={styles.letra}>-1</Text>
      </Pressable>

      <Pressable onPress={() => setContador(contador * 0)} style={styles.reset}>
        <Text style={styles.letra}>Reiniciar</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(219, 219, 219, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 50,
  },
  numero: {
    fontSize: 34,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "rgba(33, 44, 65, 1)",
    borderRadius: 15,
    color: "rgba(255, 255, 255, 1)",
    shadowColor: "#000",
    textShadowOffset: { width: 0, height: 4 },
    shadowOpacity: 3,
    elevation: 3,
  },
  suma: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "rgba(45, 9, 61, 1)",
    borderRadius: 15,
    shadowColor: "#000",
    textShadowOffset: { width: 0, height: 4 },
    shadowOpacity: 3,
    elevation: 3,
  },
  resta: {
    position: "absolute",
    bottom: 20,
    left: 20,
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "rgba(25, 117, 82, 1)",
    borderRadius: 15,
    shadowColor: "#000",
    textShadowOffset: { width: 0, height: 4 },
    shadowOpacity: 3,
    elevation: 3,
  },
  reset: {
    position: "absolute",
    bottom: 20,
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "rgba(75, 22, 57, 1)",
    borderRadius: 15,
    shadowColor: "#000",
    textShadowOffset: { width: 0, height: 4 },
    shadowOpacity: 3,
    elevation: 3,
  },
  letra: {
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
    fontSize: 17,
  },
});
