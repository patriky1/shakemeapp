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
import LogoApp from "./componentes/grid2/imagens/logoapp.svg"


// TELA 1 //
function Home({ navigation }) {
  const [loaded] = useFonts({
    EBGaramond: require("./assets/fonts/EBGaramond-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Img1 width={300} height={200} left="12%" top="7%"/>
      <Inicio width= "100%" height= "100%" bottom="10%"/>
      <View style={styles.logoposition}>
        <Image source={require("./imagens/logo.png")} />
      </View>
      <Text style={styles.titleStyle}>
        O importante é ser feliz. O resto, a gente mistura com alguma coisa
        alcoólica!
      </Text>
      <Overlay width={300} height={200} left="14%" bottom="60%"/>

      <View style={styles.buttonContainer1}>
        <TouchableOpacity onPress={() => navigation.navigate("Bebidas")}>
          <Text style={styles.buttonText1}>Bebidas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer2}>
        <TouchableOpacity
          onPress={() => navigation.navigate("cocktails")}>
          <Text style={styles.buttonText2}>cocktails</Text>
        </TouchableOpacity>
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
            headerTitle: (props) => ( // App Logo
            <LogoApp  marginHorizontal="20%"/>
          ),
          }}
          component={Bebidas}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export const styles = StyleSheet.create({
  buttonContainer1: {
    position:"absolute",
    borderRadius: 30,
    width: "4%",
    height: 40,
    backgroundColor: "black",
    bottom: "11.5%",
    marginHorizontal: "16%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText1: {
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 12,
  },

  buttonContainer2: {
    position:"absolute",
    width: "25%",
    borderRadius: 30,
    height: 40,
    backgroundColor: "black",
    bottom: "11.5%",
    left:"60%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText2: {
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

  // "TELA 2" //
  container1: {
    flex: 1,
    backgroundColor: "#D6E3E9",
  },
  rectangle: {
    position: "absolute",
    width: "100%",
    height: "50%",
    backgroundColor: "#219EBC",
  },

  circle: {
    position: "absolute",
    borderRadius: 100,
    width: "40%",
    height: "20%",
    left: 0,
    top: "40%",
    backgroundColor: "#fff",
  },

  textproduct: {
    position: "absolute",
    marginTop: "60%",
    textTransform: "uppercase",
    left: "30%",
    fontStyle: "normal",
    fontSize: 20,
  },

  textingredients: {
    fontFamily: "EBGaramond",
    position: "absolute",
    top: "60%",
    padding: 15,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 20,
  },
  imgingredients: {
    height: "15%",
    left: 0,
    marginLeft: 10,
  },




// TELA 3 //
container2: {
  flex: 1,
  backgroundColor: "white",
},
});
