import React from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'; 
import { Text, Card, Button, Icon } from 'react-native-elements';
import { useFonts } from "expo-font";
//SVG//
import Vodka_absolut from "./cardimage/Vodka_absolut.svg";
import Gin_rocks from "./cardimage/Gin_rocks.svg";
import Cerveja_pilsen from "./cardimage/Cerveja_pilsen.svg";
import Wisky_jackdeniels from "./cardimage/Wisky_jackdeniels.svg";
import Vodka_greygoose from "./cardimage/Vodka_greygoose.svg";
import Run_montilla from "./cardimage/Run_montilla.svg";

const CardBebidas = () => { 
  const [loaded] = useFonts({
    NerkoOne: require("../../assets/fonts/NerkoOne-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
    return ( 
        <>
        <ScrollView > 
        <View style={styles.container1}>
          <View style={styles.container2}>
            <Card> 
              <Vodka_absolut width="90%" />
              <Text > 
                Vodka Absolut
              </Text> 
            </Card>
            </View>
            <View style={styles.container2}>
            <Card > 
            <Wisky_jackdeniels width="100%" />
              <Text > 
              Wisky Jack Deniels
              </Text> 
            </Card>
            </View>
            <View style={styles.container2}>
            <Card > 
            <Vodka_greygoose width="140%" right="18%"/>
              <Text > 
              Vodka Grey Goose
              </Text> 
            </Card>     
            </View>
            <View style={styles.container2}>    
            <Card  > 
            <Gin_rocks width="90%" />
              <Text > 
                Gin Rock's
              </Text> 
            </Card>
            </View>
            <View style={styles.container2}>    
            <Card  > 
            <Run_montilla width="140%" right="18%"/>
              <Text > 
                Gin Rock's
              </Text> 
            </Card>
            </View>
            <View style={styles.container2}>    
            <Card  > 
            <Cerveja_pilsen width="90%" />
              <Text > 
                Gin Rock's
              </Text> 
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
      flex:1,
      flexDirection:"row",
      flexWrap:'wrap',
      
      
     
      
    }, 
    container2: { 
      width:"50%",
  
      
   }, 

  });
  
  