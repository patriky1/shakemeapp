import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//SVG//
import Vodka_absolut from "./cardimage/Vodka_absolut.svg";
import Gin_rocks from "./cardimage/Gin_rocks.svg";
import Cerveja_pilsen from "./cardimage/Cerveja_pilsen.svg";
import Wisky_jackdeniels from "./cardimage/Wisky_jackdeniels.svg";
import Vodka_greygoose from "./cardimage/Vodka_greygoose.svg";
import Run_montilla from "./cardimage/Run_montilla.svg";
import { color } from "react-native-elements/dist/helpers";

const CardBebidas = () => {
  const [loaded] = useFonts({
    NerkoOne: require("../../assets/fonts/NerkoOne-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <>
      <SafeAreaView>
        <View>
          <Text style={styles.titleStyleBebidas}>TAKE A DRINK</Text>
          <Text style={styles.text2}>Escolha sua bebida</Text>
        </View>
        
   
        <View style={styles.All} >
          <TouchableOpacity  onPress={() => navigation.navigate(" ")}>
            <Text style={styles.buttonText1}>Todos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Gin} >
          <TouchableOpacity  onPress={() => navigation.navigate(" ")}>
            <Text style={styles.buttonText1 }>Gin</Text>
          </TouchableOpacity>
        </View>

          
        
      </SafeAreaView>

      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <Card>
              <Vodka_absolut width="90%" />
              <Text>Vodka Absolut</Text>
            </Card>
          </View>
          <View style={styles.container2}>
            <Card>
              <Wisky_jackdeniels width="100%" />
              <Text>Wisky Jack Deniels</Text>
            </Card>
          </View>
          <View style={styles.container2}>
            <Card>
              <Vodka_greygoose width="140%" right="18%" />
              <Text>Vodka Grey Goose</Text>
            </Card>
          </View>
          <View style={styles.container2}>
            <Card>
              <Gin_rocks width="90%" />
              <Text>Gin Rock's</Text>
            </Card>
          </View>
          <View style={styles.container2}>
            <Card>
              <Run_montilla width="140%" right="18%" />
              <Text>Gin Rock's</Text>
            </Card>
          </View>
          <View style={styles.container2}>
            <Card>
              <Cerveja_pilsen width="90%" />
              <Text>Cerveja Pilsen</Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default CardBebidas;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: "10%",
  },
  container2: {
    width: "50%",
  },
  titleStyleBebidas: {
    color: "black",
    fontFamily: "NerkoOne",
    fontSize: 30,
    textAlign: "left",
    left: "3%",
  },
  text2: {
    marginHorizontal: "5%",
    fontSize: 16,
  },
  All: {
    position:"absolute",
    borderRadius:30,
    backgroundColor:"#219EBC",
    marginHorizontal: "6%",
    justifyContent:"center",
    width:"15%",
    height:40,    
    top:"110%",
    alignItems: "center",
   
  },
  buttonText1: {
    color:"black"
    

  },
  Gin: {
    position:"absolute",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor:"#fff",
    marginHorizontal: "32%",
    justifyContent:"center",
    height:40,    
    top:"110%",
    alignItems: "center",
   
  },
});
