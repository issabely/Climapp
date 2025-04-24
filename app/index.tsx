import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
      <Image source={require("../assets/images/Logo.png")} />
      <Image source={require("../assets/images/weather.png")} />
      <Text>Boas-vindas!</Text>
      
      <TouchableOpacity>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});