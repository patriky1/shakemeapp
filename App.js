
import { StyleSheet, Image, View, Button, Alert, SafeAreaView, Text } from "react-native";
import React from "react";
import {useFonts} from 'expo-font';

export default function App() {
  const [loaded] = useFonts ({
    EBGaramond: require ('./assets/fonts/EBGaramond-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image
        
        source={require("./imagens/inicio.png")}
        style={{ width: "100%", height: "100%", top: "10%"}}
      />
      <Text style={styles.titleStyle}>
      O importante é ser feliz. O resto, a gente mistura com alguma coisa alcoólica!
      </Text>
      <View style={styles.bebidas}>

      <Button 
        title="Bebidas"
        color='black'
        onPress={()=>Alert.alert('Bebidas')}       
      />
      <Button 
        title="Cocktails"
        color='black'
        onPress={()=>Alert.alert('Cocktails')}        
      />
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#219EBC",
   
    
  
    
  },
  bebidas:{
    flexDirection: "row",
    justifyContent:"space-around",
    bottom: "40%",
    borderRadius: 100, 
  },


  
  titleStyle:{
    color: 'white',
    fontFamily: 'EBGaramond',
    bottom: "60%",
    padding: 15,
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 9,
    textAlign: 'center',
    borderColor:'white',
  },
});
