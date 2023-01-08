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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



// TELA 1 //
function Home ({navigation}) {
  const [loaded] = useFonts({
    EBGaramond: require("./assets/fonts/EBGaramond-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return(
    <SafeAreaView style={styles.container}>
    
      <Image
        source={require("./imagens/inicio.png")}
        style={{ width: "100%", height: "100%", top: "1%" }}
      />
      <View style={styles.logoposition}>
      <Image 
        source={require("./imagens/logo.png")}
      />
      </View>
      <Text style={styles.titleStyle}>
        O importante é ser feliz. O resto, a gente mistura com alguma coisa
        alcoólica!
      </Text>

      <Image
        source={require("./imagens/overlay.png")}
        style={styles.imageoverlay}
      />

      <View style={styles.buttonContainer1}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Bebidas') }>
          <Text style={styles.buttonText1}>Bebidas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer2}>
        <TouchableOpacity
        onPress={()=>{
          console.log('ola');
        }}>
        <Text style={styles.buttonText2}>cocktails</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
    
  );
}
////

// TELA 2 //

function Bebidas ({navigation}) {
  const [loaded] = useFonts({
    EBGaramond: require("./assets/fonts/EBGaramond-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  } 
return(
  <SafeAreaView style={styles.container1}>
     <View style={styles.rectangle}></View>
     <View style={styles.logoposition}>
      <Image 
        source={require("./imagens/logo.png")}
      />
      </View>
     <View style={styles.circle}>
     <TouchableOpacity > 
     <Text style={styles.textproduct}> R$</Text>
     </TouchableOpacity>
     </View>
     <Text style={styles.textingredients}> Escolha os Igredientes.</Text>
    <ScrollView horizontal={true}>



    </ScrollView>


  </SafeAreaView>
);


}





const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" options={{ headerShown: false }} component={Home}/>
    <Stack.Screen name="Bebidas" options={{ headerShown: false }} component={Bebidas}/>

  </Stack.Navigator>
</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  buttonContainer1:{
    borderRadius:30,
    width:"22%",
    height:40,
    backgroundColor:"black",
    bottom:"42%",
    marginHorizontal:'20%',
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
    bottom:"46.8%",
    marginHorizontal:'60%',
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText2:{
    textTransform:"uppercase",
    color:"#fff",
    fontSize:12,
  },

  container:{
    flex: 1,
    backgroundColor: "#219EBC",
  },

  titleStyle: {
    color: "white",
    fontFamily: "EBGaramond",
    bottom: "65%",
    padding: 15,
    fontSize: 20,
    textAlign: "center",
  
  },

  imageoverlay: {
    bottom: "32%",
    alignItems: "center",
    justifyContent: "center",
    margin: "10%",
    width: "66%",
    left:"8%",
    
  },

  logoposition: {
    alignItems:"flex-start",
    justifyContent: "center",
    margin:"5%",
    position:"absolute",
    
  },

// TELA 2 // 
  container1:{
    flex: 1,
    backgroundColor: "#D6E3E9",
  },
  rectangle:{
  position: "absolute",
  width: "100%",
  height: "50%",
  backgroundColor: '#219EBC',
  },

  circle:{
  position:"absolute",
  borderRadius:100,
  width:"40%",
  height:"20%",
  left:0,
  top:"40%",
  backgroundColor:"#fff"
  },

  textproduct:{
    position:"absolute",
    marginTop:"60%",
    textTransform:"uppercase",
    left:"30%",
    fontStyle:"normal", 
    fontSize:20,

  },

  textingredients:{
    fontFamily: "EBGaramond",
    position:"absolute",
    top:"60%",
    padding: 15,
    fontSize: 20,
    textAlign: "center",
    lineHeight:20,
  },
  imgingredients:{
    height:"15%",
    left:0,
    marginLeft:10,
  },
});
