import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    EBGaramond: require("./assets/fonts/EBGaramond-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./imagens/inicio.png")}
        style={{ width: "100%", height: "100%", top: "1%" }}
      />
      <Text style={styles.titleStyle}>
        O importante é ser feliz. O resto, a gente mistura com alguma coisa
        alcoólica!
      </Text>


      <View style={styles.buttonContainer1}>
        <TouchableOpacity
        onPress={()=>{
          console.log('ola');
        }}
        
        >
          <Text style={styles.buttonText1}>Bebidas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer2}>
        <TouchableOpacity
        onPress={()=>{
          console.log('ola');
        }}
        
        >
          <Text style={styles.buttonText2}>cocktails</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer1:{
    borderRadius:30,
    width:80,
    height:40,
    backgroundColor:"black",
    bottom:"30%",
    marginHorizontal:'15%',
    justifyContent:"center",
    alignItems:"center",
  
  },
  buttonText1:{
    textTransform:"uppercase",
    color:"#fff",
    fontSize:12,
  },

  buttonContainer2:{
    padding:5,
    borderRadius:30,
    width:90,
    height:40,
    backgroundColor:"black",
    bottom:"35%",
    marginHorizontal:'63%',
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText2:{
    textTransform:"uppercase",
    color:"#fff",
    fontSize:12,
  },
  container: {
    flex: 1,
    backgroundColor: "#219EBC",
  },



  titleStyle: {
    color: "white",
    fontFamily: "EBGaramond",
    bottom: "60%",
    padding: 15,
    fontSize: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 9,
    textAlign: "center",
    borderColor: "white",
  },
  overlay: {
    bottom: "32%",
    alignItems: "center",
    justifyContent: "center",
    margin: "10%",
    width: "80%",
  },
});
