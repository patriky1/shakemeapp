import {
    StyleSheet,
    Image,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
  } from "react-native";
  const tabs = [{ name: 'My Account' }, { name: 'Company' }, { name: 'Team' }];

import { useFonts } from "expo-font";
// import { styles } from "../../App";
import CardBebidas from "../cards/card.js";

const Bebidas = ({ navigation }) => {
  const [loaded] = useFonts({
    NerkoOne: require("../../assets/fonts/NerkoOne-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container2}>
        <View>
          <Text style={styles.titleStyleBebidas}>TAKE A DRINK</Text>
          <Text style={styles.text2}>Escolha sua bebida</Text>
        </View>
        
    <ScrollView vertical={true}>
      <CardBebidas/>
    </ScrollView>
    </SafeAreaView>
  );
}
export default Bebidas;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "white",
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





});