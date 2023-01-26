import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";

const ingredients = [

  {
    name: "Limao Siciliano",
    image: require("../grid1/imagens/Limao_Siciliano.png"),
  },

]


const Drinks = ({ navigation }) => {
const [loaded] = useFonts({
  EBGaramond: require("../../assets/fonts/EBGaramond-Regular.ttf"),
});
if (!loaded) {
  return null;
}
return (
  <SafeAreaView style={styles.container}>
    <View style={styles.rectangle}>
    <View style={styles.circle}>
    <View style={styles.circle1}>
      <TouchableOpacity style={styles.textproduct}>
        <Text> R$</Text>
      </TouchableOpacity>
    </View>
    </View>
    </View>
    <View style={styles.logoposition}>
      <Image source={require("../../imagens/logo.png")} />
    </View>

    <Text style={styles.textingredients}> Escolha os Igredientes.</Text>
    <View >
    <ScrollView horizontal style={styles.ScrollViewtext}>
    <View style={styles.rectangle2}></View>



    </ScrollView>
    </View>
  </SafeAreaView>
);
}
export default Drinks;

export const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#D6E3E9",
},
rectangle:{
  backgroundColor: "#219EBC",
  width:"100%",
  height:"50%",
  zIndex:0
},
logoposition:{
  alignItems: "flex-start",
  justifyContent: "center",
  margin: "5%",
  position: "absolute",
},
circle: {
  position:"absolute",
  backgroundColor:"#D6E3E9",
  height: 160,
  width: 162,
  borderRadius: 100,
  top:"78%",
  left:"2%",
},
  circle1: {
    position:"absolute",
    backgroundColor:"white",
    height: 150,
    width: 150,
    borderRadius: 100,
    left:"3.5%",
    top:"5%"
  },
  textproduct:{
    position:"absolute",
    justifyContent:"center",
    left:"30%",
    top:"60%"
  },
  textingredients:{
    position:"absolute",
    top:"62%",
    margin:"2%",
    fontSize:16,
    fontFamily:"EBGaramond"
  },
  rectangle2: {
    backgroundColor:"black",
    height: 100,
    width: 70,
    borderRadius: 30,
    marginTop:120,
    left:"1%"
    
  },
  ScrollViewtext:{
    borderWidth:2,
    borderColor:"red",
  }
});