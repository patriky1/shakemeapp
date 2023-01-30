import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import cocktails from "./componentes/grid1/grid1.js";
import Bebidas from "./componentes/grid2/grid2.js";

// SVG //
import Img1 from "./imagens/imagensSVG/img1.svg";
import Inicio from "./imagens/imagensSVG/inicio.svg";
import Overlay from "./imagens/imagensSVG/overlay.svg";
import LogoApp from "./componentes/grid2/imagens/logoapp.svg";

// TELA 1 //
function Home({ navigation }) {
  const [loaded] = useFonts({
    EBGaramond: require("./assets/fonts/EBGaramond-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const strings = {
    titulo:
      "O importante é ser feliz. O resto, a gente mistura com alguma coisa alcoólica!",
    botoes: ["Bebidas", "Cocktails"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Img1 width={300} height={200} left="12%" top="7%" />
      <Inicio width="100%" height="100%" bottom="10%" />
      <View style={styles.logoposition}>
        <Image source={require("./imagens/logo.png")} />
      </View>
      <Text style={styles.titleStyle}>{strings.titulo}</Text>
      <View style={styles.overlay}>
        <View style={styles.overlayImage}>
          <Overlay width={300} height={50} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Bebidas")}>
            <Text style={styles.buttonText}>{strings.botoes[0]}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("cocktails")}>
            <Text style={styles.buttonText}>{strings.botoes[1]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="cocktails"
          options={{ headerShown: false }}
          component={cocktails}
        />
        <Stack.Screen
          name="Bebidas"
          options={{
            headerTitle: (
              props // App Logo
            ) => <LogoApp marginHorizontal="20%" />,
          }}
          component={Bebidas}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: "15%",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  overlayImage: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    left: 0,
  },
  buttonContainer: {
    marginTop: "1%",
    borderRadius: 30,
    width: "25%",
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 12,
  },

  container: {
    flex: 1,
    backgroundColor: "#219EBC",
  },

  titleStyle: {
    color: "white",
    fontFamily: "EBGaramond",
    bottom: "85%",
    padding: 15,
    fontSize: 20,
    textAlign: "center",
  },

  imageoverlay: {
    bottom: "60%",
    alignItems: "center",
    justifyContent: "center",
    margin: "10%",
    width: "65%",
    left: "8%",
  },

  logoposition: {
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "5%",
    position: "absolute",
  },
});
