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
import { styles } from "../../App";
import CardBebidas from "../cards/card.js";

const Bebidas = ({ navigation }) => {
  const [loaded] = useFonts({
    EBGaramond: require("../../assets/fonts/EBGaramond-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container2}>
    <ScrollView vertical={true}>
      <CardBebidas/>
    



    </ScrollView>
    </SafeAreaView>
  );
}
export default Bebidas;

