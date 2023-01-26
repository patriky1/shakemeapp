import React, { useState } from "react";
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
import {
  Svg,
  G as SvgG,
  Circle as SvgCircle,
  Text as SvgText,
  TextPath as SvgTextPath,
  TSpan as SvgTSpan
} from 'react-native-svg';

const SvgComponent = (props) => (
  <View style={{ flex: 1 }}>
    <Svg height="300" width="300" viewBox="75 80 300 300" {...props}>
      <SvgG id="circle">
        <SvgCircle
          r={55}
          x={150}
          y={150}
          fill="none"
          stroke="none"
          strokeWidth={0}
          transform="rotate(-140)"
        />
      </SvgG>
     

        <SvgText fill="#000" fontSize="14">
          <SvgTextPath href="#circle">
            <SvgTSpan dy={0}>
              {props.text}
            </SvgTSpan>
          </SvgTextPath>
        </SvgText>

    </Svg>
  </View>
);



const data = [

  {
    name: "Limao Siciliano",
    image: require("../grid1/imagens/Limao_Siciliano.png"),
  },
  {
    name: "Limao taiti",
    image: require("../grid1/imagens/Limao_taiti.png"),
  },
  {
    name: "Abacaxi",
    image: require("../grid1/imagens/Abacaxi.png"),
  },
  {
    name: "Banana",
    image: require("../grid1/imagens/Banana.png"),
  },
  {
    name: "Coco",
    image: require("../grid1/imagens/Coco.png"),
  },
  {
    name: "Framboesa",
    image: require("../grid1/imagens/Framboesa.png"),
  },
  {
    name: "Kiwi",
    image: require("../grid1/imagens/Kiwi.png"),
  },
  {
    name: "Laranja",
    image: require("../grid1/imagens/Laranja.png"),
  },
  {
    name: "Limão Taiti",
    image: require("../grid1/imagens/Limao_taiti.png"),
  },
  {
    name: "Maçã Verde",
    image: require("../grid1/imagens/Maca_verde.png"),
  },
  {
    name: "Maçã",
    image: require("../grid1/imagens/Maca.png"),
  },
  {
    name: "maracuja",
    image: require("../grid1/imagens/Maracuja.png"),
  },
  {
    name: "Melancia",
    image: require("../grid1/imagens/Melancia.png"),
  },
  {
    name: "Morango",
    image: require("../grid1/imagens/Morango.png"),
  },
  {
    name: "Pitaya",
    image: require("../grid1/imagens/Pitaya.png"),
  },
  {
    name: "Uva tinta",
    image: require("../grid1/imagens/Uva_tinta.png"),
  },



]


const Drinks = ({ navigation }) => {
const [datalist] = useState(data);
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
      <View style={styles.svgposition}>
    <SvgComponent text="Limão sisciliano"/>
    </View>
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
    {datalist.map((item) => (
    <View style={styles.rectangle2}>
       <Image style={styles.itemImage} source={item.image} />
       <Text style={styles.itemName}> {item.name}</Text>
    </View>
    ))}
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
    backgroundColor:"white",
    height: 100,
    width: 70,
    borderRadius: 30,
    marginTop:120,
    left:"1%",
    margin:5
    
  },
  itemName: {
    fontFamily:"EBGaramond",
    fontSize: 12,
    textAlign:"center",
    bottom:"5%"
  },
  itemImage:{
    width:70,
    height:70
  }


});